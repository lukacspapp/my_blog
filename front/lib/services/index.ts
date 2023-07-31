import { gql, request } from 'graphql-request';
import { Project, ProjectData, ProjectsData } from '../../types/portfolioTypes';

export const readAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? ''
export const writeAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_WRITE_API ?? ''

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
  const { projects } : ProjectsData = await request(readAPI, query)

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
  const { project } : ProjectData = await request(readAPI, query)

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
  const { bios } = await request(readAPI, query) as any

  return bios[0]
}

export async function getAuth0Users() {
  const query = gql`
    query MyQuery {
      auth0Users {
        email
      }
    }
  `
  const { auth0Users } =  await request(readAPI, query) as any

  return auth0Users
}

export async function createAuth0User(email: string) {
  const mutation = gql`
        mutation MyMutation {
          createAuth0User(data: {email: "sanyi@mail.com", stages: PUBLISHED}) {
            id,
            email
          }
        },
      `
  const { createAuth0User } = await request(writeAPI, mutation) as any

  return createAuth0User
}