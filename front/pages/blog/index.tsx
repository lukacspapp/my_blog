import { fetcher } from "../../lib/api";
import { server } from "../../config";
import { Nav } from "../../components/Nav";
import BlogPosts from "../../components/BlogPosts";
import { useState } from "react";
import Footer from "../../components/Footer";
import Link from "next/link";
import { AuthorsType, PostsType, ServerSidePosts } from "../../types/PostsType";
import { GetServerSideProps } from "next";

interface ServerSideProps {
  ServerSidePosts: PostsType[];
  ServerSideAuthors: any[];
}


function Blog({ ServerSidePosts, ServerSideAuthors }: ServerSideProps) {

  const [posts, _setPosts] = useState(ServerSidePosts);
  const [authors, _setAuthors] = useState(ServerSideAuthors)




  console.log('authors',authors);
  console.log('posts',posts);

  const authorOfPost = (posts, authors) => {
    return posts.map(post => {
      const author = authors.find(author => author.attributes.post.data.id === post.id)
      return { ...post, author }
    })
  }
  console.log(authorOfPost(posts, authors));





// function that takes in the array of authors id and the posts and mathces the id to the post id




  return (
    <div className='blog-page'>
      <Nav />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {authorOfPost(posts, authors).map(post => {
              return (
                <BlogPosts key={post.id} post={post}/>
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