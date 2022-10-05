import { fetcher } from "../../lib/api";
import { server } from "../../config";
import { Nav } from "../../components/Nav";
import BlogPosts from "../../components/BlogPosts";
import { useState } from "react";
import Footer from "../../components/Footer";
import Link from "next/link";
import { PostsType, ServerSidePosts } from "../../types/PostsType";
import { GetServerSideProps } from "next";

function Blog({ ServerSidePosts }: { ServerSidePosts: PostsType[] }) {

  const [posts, _setPosts] = useState(ServerSidePosts);

  return (
    <div className='blog-page'>
      <Nav />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {posts.map((post: PostsType) => {
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

export const getServerSideProps: GetServerSideProps= async () => {

  const post: ServerSidePosts = await fetcher(`${server}/posts?populate=*`);

  if (!post) {
    return {
      notFound: true,
    }
  }
  console.log(post);


  return {
    props: {
      ServerSidePosts: post.data
    }
  }
}


export default Blog;