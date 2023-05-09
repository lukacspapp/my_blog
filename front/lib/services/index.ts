import { gql, request } from 'graphql-request';
import { Project, ProjectData, Projects, ProjectsData } from '../../types/portfolioTypes';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? ''

export async function getProjects(): Promise<Projects[]> {
  const query = gql`
    query MyQuery {
      projects {
        description
        slug
        title
        createdAt
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
    content
    description
    title
  }
    }
  `
  const { project } : ProjectData = await request(graphqlAPI, query)

  return project
}