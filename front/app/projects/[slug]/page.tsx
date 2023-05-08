import readingTime from "reading-time";
import Description from "../../../components/Github/Desciption";
import JournalLayout from "../../../components/JournalLayout";
import TransitionPage from "../../../components/TransitionPage";
import { formatDate, normalizeUtc } from "../../../lib/date";
import { getProject } from "../../../lib/services";

export default async function SlugPage({ params }) {

  const { slug } = params;
  const project = await getProject(slug);

  const roundedReadingTime = Math.round(readingTime(project.content).minutes);

  return (
    <main className="body">
      <TransitionPage title={project.title} description={project.description}>
      <div className="relative">
        <aside className="absolute top-0 -left-12 h-screen pr-11 text-left font-['Luxurious_Roman'] text-sm text-gray-400 [writing-mode:vertical-rl] dark:text-gray-600 md:-left-14">
          {formatDate(normalizeUtc(new Date()))} • {roundedReadingTime} min read
        </aside>
      </div>
      <Description title={project.title} description={project.description}/>
      <JournalLayout content={project.content} />
      </TransitionPage>
    </main>
  );
}