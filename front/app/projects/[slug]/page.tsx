import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

export default async function SlugPage({ params })  {

  const { slug } = params

  const fileContent = await fs.promises.readFile(`./data/projects/${slug}.mdx`, "utf-8");
  const { data, content } = matter(fileContent);
  const file = { title: data.title, content };
  const roundedReadingTime = Math.round(readingTime(file.content).minutes)

  return (
    <main className='body'>
      <h1>
        {file.title}
        {roundedReadingTime}
      </h1>
      <p>{file.content}</p>
    </main>
  )
}

export async function generateStaticParams() {
  const fileNames = fs.readdirSync("./data/projects");
  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(".mdx", "") },
  }));
  return paths;
}


