
import readingTime from "reading-time";
import Description from "../../../components/Description/Description";
import JournalLayout from "../../../components/JournalLayout";
import TransitionPage from "../../../components/TransitionPage";
import { na } from "../../../lib/date";
import { getProject } from "../../../lib/services";

export default async function ProjectSlugPage({ params }: { params: { slug: string } }) {

  const { slug } = params;

  const project = await getProject(slug);

  const roundedReadingTime = Math.round(readingTime(project.content.markdown).minutes);

  return (
    <main className="body">
      <TransitionPage title={project.title} description={project.description}>
        <div className="relative">
          <aside className="absolute top-0 -left-12 h-screen pr-11 text-left font-['Luxurious_Roman'] text-sm text-gray-400 [writing-mode:vertical-rl] dark:text-gray-600 md:-left-14">
            {na(project.created)} • {roundedReadingTime} min read
          </aside>
          <Description title={project.title.replace(/\d+$/, '')} description={project.description} />
          <JournalLayout content={project.content.markdown} />
        </div>
      </TransitionPage>
    </main>
  );
}