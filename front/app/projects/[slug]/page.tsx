import matter from "gray-matter";

export default async function SlugPage({ params }) {

  const { slug } = params

  const {data, content} = matter.read(`./data/projects/${slug}.mdx`)


  return (
    <main className='body'>
      <h1>
        {data.title}
      </h1>
    </main>
  )
}
