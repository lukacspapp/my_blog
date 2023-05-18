import { normalizeUtc } from "../../../lib/date"
import { ContributionsCollectionType, UserInformationType } from "../../../types/githubTypes"

const api = "https://api.github.com/graphql"
const ghToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN
const ghHeaders = { Authorization: `bearer ${ghToken}` }

async function fetchYearlyContributions(username: string | string[], year: number): Promise<ContributionsCollectionType> {
  const body = {
    query: `query {
        user(login: "${username}") {
          contributionsCollection(from: "${year}-01-01T00:00:00.000Z", to: "${year}-12-31T00:00:00.000Z") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  contributionLevel
                  date
                }
              }
            }
          }
        }
      }`,
  }

  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify(body),
    headers: ghHeaders,
  })

  const data = (await response.json()) as ContributionsCollectionType

  data.data.user.contributionsCollection.year = year

  return data
}

export async function getGithubContributions(username: string): Promise<UserInformationType> {

  const body = {
    query: `query {
        user(login: "${username}") {
          contributionsCollection {
            contributionYears
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  contributionLevel
                  date
                }
              }
            }
          }
        }
      }`,
  }

  // Fetch contributions in the last year
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify(body),
    headers: ghHeaders,
  })

  const collections: ContributionsCollectionType[] = []

  const currentCollection = (await response.json()) as ContributionsCollectionType

  collections.push(currentCollection)

  if (currentCollection.data.user === null) {
    throw new Error("User not found.")
  }

  const years = currentCollection.data.user.contributionsCollection.contributionYears

  let longestStreak = 0
  let currentStreak = -1
  let potentialStreak = 0
  let totalContributions = 0
  let firstContributionDate = ""
  const today = normalizeUtc(new Date()).toISOString().split("T")[0]

  for (const year of years) {

    let resolvedCollection: ContributionsCollectionType

    const collection = fetchYearlyContributions(username, year)
    resolvedCollection = await collection

    collections.push(resolvedCollection)

    const contributionCalendar = resolvedCollection.data.user.contributionsCollection.contributionCalendar
    const contributions = contributionCalendar.weeks
    totalContributions += contributionCalendar.totalContributions
    for (const contribution of [...contributions].reverse()) {
      for (const day of [...contribution.contributionDays].reverse()) {
        if (day.contributionCount === 0) {
          longestStreak = Math.max(potentialStreak, longestStreak)
          if (currentStreak === -1 && day.date < today) {
            currentStreak = Math.max(potentialStreak, currentStreak)
          }

          potentialStreak = 0
        } else {
          potentialStreak += 1
          firstContributionDate = day.date
        }
      }
    }
  }

  return { collections, insights: { longestStreak, currentStreak, totalContributions, firstContributionDate } }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") ?? "lukacspapp";

  const data = await getGithubContributions(String(username))

  return new Response(JSON.stringify(data))

}