import Description from "../../components/Github/Desciption"
import TransitionPage from "../../components/TransitionPage"

const title = 'Projects'
const description = 'A list of projects I have worked on.'

export default async function Projects() {


  return (
    <div>
      <TransitionPage title={title} description={description}>
        <Description title={title} description={description} />
      </TransitionPage>
    </div>
  )
}