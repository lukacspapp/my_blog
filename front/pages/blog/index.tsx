import { fetcher } from "../../lib/api";
import { server } from "../../config";
import BlogPosts from "../../components/Blog/BlogPosts";
import { useState } from "react";
import { PostsType, ServerSidePosts } from "../../types/PostsType";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import BlogHeader from "../../components/Blog/BlogHeader";
import Banner from "../../components/Blog/Banner";
import BlogList from "../../components/Blog/BlogList";

interface ServerSideProps {
  ServerSidePosts: PostsType[];
  ServerSideAuthors: any[];
}


function Blog({ ServerSidePosts, ServerSideAuthors }: ServerSideProps) {

  const [posts, _setPosts] = useState(ServerSidePosts);
  const [authors, _setAuthors] = useState(ServerSideAuthors)

  const authorOfPost = (posts, authors) => {
    return posts.map(post => {
      const author = authors.find(author => author.attributes.post.data.id === post.id)
      return { ...post, author }
    })
  }

  return (
    <div className="max-w-7xl mx-auto">
      <BlogHeader />
      <Banner />
      <BlogList posts={posts} />
      {/* <div className='blog-page'>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              {authorOfPost(posts, authors).map(post => {
                return (
                  <BlogPosts key={post.id} post={post} />
                )
              })}
            </div>
          </div>
        </section>
      </div> */}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const session = await getSession(context);

  if (session == null) {
    return {
      redirect: {
        destination: '/blog/login',
        permanent: true,
      },
    };
  }

  const posts: ServerSidePosts = await fetcher(`${server}/posts?populate=*`);

  const authors: any = await fetcher(`${server}/authors?populate=*`);

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ServerSidePosts: posts.data,
      ServerSideAuthors: authors.data
    }
  }
}


export default Blog;