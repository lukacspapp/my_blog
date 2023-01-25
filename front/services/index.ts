import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export async function getExpereinces() {
  const query = gql`
    query MyQuery {
      portfolioExpriences {
        companyTitle
        endDate
        id
        jobTitle
        portfolioTechnologies {
          name
          id
          image {
            url
          }
        }
        startDate
        image {
          url
        }
      }
    }
  `
  const data = await request( graphqlAPI, query)

  return data.portfolioExpriences
}

export async function getTechnologies() {
  const query = gql`
    query MyQuery {
      portfolioTechnologies {
        image {
          url
          id
        }
        name
      }
    }
  `
  const data = await request( graphqlAPI, query)

  return data.portfolioTechnologies
}

export async function getHero() {
  const query = gql`
    query MyQuery {
      portfolioHeroes {
        id
        profile {
          url
        }
        vocations
      }
    }
  `
  const data = await request( graphqlAPI, query)

  return data.portfolioHeroes
}

export async function getAbout() {
  const query = gql`
    query MyQuery {
      potfolioAbouts {
        bio
        email
        id
        location
        photo {
          url
        }
        title
      }
    }
  `
  const data = await request( graphqlAPI, query)

  return data.potfolioAbouts
}


