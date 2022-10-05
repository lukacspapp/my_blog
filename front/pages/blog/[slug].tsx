import { fetcher } from "../../lib/api";


export default function Slug({ post }) {

  const { title, content, author, category } = post.data.attributes;
  console.log(title)


  return (
    // center the text
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="m-10 text-fuchsia-500">{title}</div>
        </div>
      </div>
    </div>
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
