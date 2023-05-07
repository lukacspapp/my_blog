import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import Description from "../../../components/Github/Desciption";
import JournalLayout from "../../../components/JournalLayout";
import TransitionPage from "../../../components/TransitionPage";
import { formatDate, normalizeUtc } from "../../../lib/date";

export default async function SlugPage({ params }) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "data", "projects", `${slug}.mdx`);
  const file = matter.read(filePath);

  const roundedReadingTime = Math.round(readingTime(file.content).minutes);


  return (
    <main className="body">
      <TransitionPage title={file.data.title} description={file.data.description}>
      <div className="relative">
        <aside className="absolute top-0 -left-12 h-screen pr-11 text-left font-['Luxurious_Roman'] text-sm text-gray-400 [writing-mode:vertical-rl] dark:text-gray-600 md:-left-14">
          {formatDate(normalizeUtc(new Date()))} • {roundedReadingTime} min read
        </aside>
      </div>
      <Description title={file.data.title} description={file.data.description}/>
      <JournalLayout content={file.content} />
      </TransitionPage>
    </main>
  );
}