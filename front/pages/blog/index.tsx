import { fetcher } from "../../lib/api";
import { server } from "../../config";
import { Nav } from "../../components/Nav";
import BlogPosts from "../../components/BlogPosts";
import { useState } from "react";
import Footer from "../../components/Footer";
import Link from "next/link";

function Blog({ ServerSidePosts }) {
  console.log(ServerSidePosts);

  // set posts to state
  const [posts, setPosts] = useState(ServerSidePosts);

  const { authors, categories } = posts;



  console.log('--------------',posts);






  console.log('images-----------',posts.map(post => post.attributes.image.data));

  // {posts.map((post: any) => {
  //   return (
  //       <BlogPosts key={post.id} post={post} />
  //   );
  // })}

  // const smallImg = `http://localhost:1337${image.data[0].attributes.formats.small.url}`


  return (
    <div className='blog-page'>
      <Nav />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {posts.map((post: any) => {
              return (
                <BlogPosts key={post.id} post={post} />
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {

  const post = await fetcher(`${server}/posts?populate=*`);

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ServerSidePosts: post.data
    }
  }
}


export default Blog;