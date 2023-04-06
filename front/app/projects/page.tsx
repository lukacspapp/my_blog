import fs from 'fs'
import matter from "gray-matter"
import Description from "../../components/Github/Desciption"
import TransitionPage from "../../components/TransitionPage"

const title = 'Projects'
const description = 'A list of projects I have worked on.'

export default async function Projects() {

  const fileNames = fs.readdirSync("./data/projects")
  console.log(fileNames)

  const projects = (
    await Promise.all(fileNames.map(fileName => matter.read((`./data/projects/${fileName}`)).data)))
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())

    console.log('====================================');
    console.log(projects);
    console.log('====================================');


  return (
    <div>
      <TransitionPage title={title} description={description}>
        <Description title={title} description={description} />

      </TransitionPage>
    </div>
  )
}