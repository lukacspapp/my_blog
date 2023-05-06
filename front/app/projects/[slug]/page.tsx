import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

export default async function SlugPage({ params }) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "data", "projects", `${slug}.mdx`);
  const file = matter.read(filePath);

  const roundedReadingTime = Math.round(readingTime(file.content).minutes);

  return (
    <main className="body">
      <p>{file.content}</p>
    </main>
  );
}