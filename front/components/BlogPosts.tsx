import Link from "next/link";

export default function BlogPosts({ post, authorss }: any) {

  const { title, excerpt, content, categories, image, authors } = post.attributes;
  const thumpNail = `http://localhost:1337${image.data[0].attributes.url}`
  const author = authors.data[0].attributes.name;
  // const smallImg = `http://localhost:1337${image.data[0].attributes.formats.small.url}`


const authorDecider = (post, authors) => {

const authorId = post.attributes.authors.data.map(i => i.id)
const authorName = authors.map(i => i.id)
console.log(authorId, authorName)

// if any number in the athorName array mathces any number in the authorId array return that objec


}

const avatar = `http://localhost:1337${authorss[0].attributes.photo.data.attributes.url}`



  return (
    <div className="lg:flex">
      <img className="object-cover p-2 w-full h-56 rounded-3xl lg:w-64" src={thumpNail} alt="" />
      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <Link href={`/blog/${post.attributes.slug}`}>
          <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
            {post.attributes.title}
          </a>
        </Link>
        <div className="avatar">
          <div className="w-12 mask mask-squircle">
            <img src={avatar} />
          </div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-300">{post.attributes.createdAt.substring(0, 10)}</span>
        <h1>{author}</h1>
      </div>
    </div>
  )
}
