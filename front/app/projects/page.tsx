import Description from '../../components/Description/Description'
import ProjectList from '../../components/ProjectList'
import TransitionPage from "../../components/TransitionPage"
import { getProjects } from '../../lib/services'

const title = 'Projects'
const description = 'A list of projects I have worked on.'

export default async function Projects() {

  const projects = await getProjects()

  const sortedProjects = projects.map((project) => project).sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())

  return (
    <main className='body'>
      <TransitionPage title={title} description={description}>
        <Description title={title} description={description} />
        <ProjectList projects={sortedProjects} />
      </TransitionPage>
    </main>
  )
}