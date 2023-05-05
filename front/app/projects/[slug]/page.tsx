import matter from "gray-matter";

export default async function SlugPage({ params })  {

  const { slug } = params

  const readMatterFile = (filePath: string) => {
    return new Promise((resolve, reject) => {
      try {
        const { data, content } = matter.read(filePath);
        resolve({ data, content });
      } catch (error) {
        reject(error);
      }
    });
  };

  const {data, content} = await readMatterFile(`./data/projects/${slug}.mdx`) as {data: {title: string}, content: string}

  return (
    <main className='body'>
      <h1>
        {data.title}
      </h1>
      <p>{content}</p>
    </main>
  )
}
