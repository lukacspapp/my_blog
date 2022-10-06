import Link from "next/link";

export default function BlogPosts({
  post: {
    author,
    attributes: {
      title,
      image,
      slug,
      createdAt
    }
  } }) {

  const thumpNail = `http://localhost:1337${image.data[0].attributes.url}`
  const avatar = `http://localhost:1337${author.attributes.photo.data.attributes.url}`



  return (
    <div className="lg:flex">
      <img className="object-cover p-2 w-full h-56 rounded-3xl lg:w-64" src={thumpNail} alt="" />
      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <Link href={`/blog/${slug}`}>
          <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
            {title}
          </a>
        </Link>
        <div className="avatar">
          <div className="w-12 mask mask-squircle">
            <img src={avatar} />
          </div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-300">{createdAt.substring(0, 10)}</span>
        <h1>{'author'}</h1>
      </div>
    </div>
  )
}
