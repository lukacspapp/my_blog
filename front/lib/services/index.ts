import { gql, request } from 'graphql-request';
import { About, Experience, Hero, PortfolioAbout, PortfolioExpriences, PortfolioHero, PortfolioTechnologies, Technology } from '../../types/portfolioTypes';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? ''

export async function getExpereinces() : Promise<Experience[]> {
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
  const data: PortfolioExpriences = await request( graphqlAPI, query)

  return data.portfolioExpriences
}

export async function getTechnologies() : Promise<Technology[]> {
  const query = gql`
    query MyQuery {
      portfolioTechnologies (first: 100) {
        image {
          url
          id
        }
        name
      }
    }
  `
  const data: PortfolioTechnologies = await request( graphqlAPI, query)

  return data.portfolioTechnologies
}

export async function getHero() : Promise<Hero[]> {
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
  const data : PortfolioHero = await request( graphqlAPI, query)

  return data.portfolioHeroes
}

export async function getAbout() : Promise<About[]> {
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
  const data : PortfolioAbout = await request( graphqlAPI, query)

  return data.potfolioAbouts
}


