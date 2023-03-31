// Github Contributions
export interface ContributionWeekType {
  color: string
  contributionCount: number
  contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE"
  date: string
}

export interface ContributionsCollectionType {
  data: {
    user: {
      contributionsCollection: {
        year?: number
        contributionYears: number[]
        contributionCalendar: {
          totalContributions: number
          weeks: {
            contributionDays: ContributionWeekType[]
          }[]
        }
      }
    }
  }
}

export interface UserCacheType {
  username: string
  year: number
  contributions: ContributionsCollectionType
}

export interface UserInsightsType {
  longestStreak: number
  currentStreak: number
  totalContributions: number
  firstContributionDate: string
}
export interface UserInformationType {
  collections: ContributionsCollectionType[]
  insights: UserInsightsType
}

export interface MetaType<Slug> {
  slug: Slug
  title: string
  description: string
  publishedAt: string
}