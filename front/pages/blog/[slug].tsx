import { fetcher } from "../../lib/api";


export default function Slug({ post }) {

  const { title, content, authors, categories, image, createdAt } = post.data.attributes;
  // const medImg = `http://localhost:1337${image.data[0].attributes.formats.small.url}`
  // const smlImg = `http://localhost:1337${image.data[0].attributes.formats.thumbnail.url}`

  const author = authors.data[0].attributes.name

  const category = categories.data[0].attributes.name

  const images = image.data.map((img) => img.attributes.url)





  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 text-lg">{content}</p>
            <p>{createdAt.substring(0, 10)}</p>
            <p>{category}</p>
            <button className="btn btn-primary">{author}</button>
          </div>
        </div>
      </div>
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {images.map((img) => {
              return (
                <div className="flex flex-wrap p-1 w-1/3">
                  <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="w-full p-1 md:p-2">
                      <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={`http://localhost:1337${img}`} />
                      <img />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}


export const getServerSideProps = async ({ params }) => {
  const { slug } = params;

  const post = await fetcher(`http:///localhost:1337/api/posts/${slug}?populate=*`);

  return {
    props: {
      post: post
    }
  }
}
