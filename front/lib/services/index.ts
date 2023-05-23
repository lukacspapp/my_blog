import { gql, request } from 'graphql-request';
import { Project, ProjectData, ProjectsData } from '../../types/portfolioTypes';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? ''

export async function getProjects(): Promise<Project[]> {
  const query = gql`
    query MyQuery {
      projects {
        description
        slug
        title
        created
      }
    }
  `
  const { projects } : ProjectsData = await request(graphqlAPI, query)

  return projects
}

export async function getProject(slug: string): Promise<Project> {
  const query = gql`
    query MyQuery {
      project(where: {slug: "${slug}"}) {
        content {
          html
        },
        created
        description
        title
      }
    }
  `
  const { project } : ProjectData = await request(graphqlAPI, query)

  return project
}

export async function getBio() {
  const query = gql`
    query MyQuery {
      bios {
        email
        excerpt
        name
        skills
        company {
          name
          website
        }
      }
    }
  `
  const { bios } = await request(graphqlAPI, query) as any

  return bios[0]
}