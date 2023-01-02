import Link from 'next/link';
import React from 'react'

type Props = {
  posts: any
}

export default function BlogList({ posts }: Props) {
  console.log('====================================');
  console.log(posts);
  console.log('====================================');
  return (
    <div>
      <hr className='border-[#F7AB0A] mb-10' />

      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24 rounded-3xl'>
        {posts.map((post: any) => {
          const { authors, categories, image, title, createdAt, excerpt, slug } = post.attributes
          console.log('====================================');
          const url = image.data[0].attributes.url
          console.log('====================================');
          return (
            <Link href={`/blog/${slug}`}>
              <div key={post.id} className='flex flex-col group cursor-pointer'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure><img className='w-full' src={`http://localhost:1337${url}`} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{excerpt}</p>
                    <div className="card-actions justify-end">
                      {categories.data.map((category: any) => {
                        return (
                          <div key={category.id} className="badge badge-accent badge-outline">{category.attributes.name}</div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className='relative w-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                  <img className='w-full rounded-3xl object-cover object-left h-96 lg:object-center' src={`http://localhost:1337${url}`} alt="first image of the blog fill to Next image" />
                  <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg text-white p-5 flex justify-between rounded-3xl'>
                    <div>
                      <p className='font-bold'>
                        {title}
                      </p>
                      <p>
                        {new Date(createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-x-2 items-center rounded-3xl'>
                      {categories.data.map((category: any) => {
                        return (
                          <div key={category.id} className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                            <p className='font-bold'>
                              {category.attributes.name}
                            </p>

                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className='mt-5 flex-1'>
                  <div>

                    <p className='text-lg font-bold'>{title}</p>
                    <p className='line-clamp-2'>{excerpt}</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}