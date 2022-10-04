
import Image from "next/image";
import Link from "next/link";

export default function BlogPosts({ post }) {

  // console.log(post.attributes.categories.data[0].attributes.name);

  const { title, excerpt, content, categories, image, authors } = post.attributes;

  const thumpNail = `http://localhost:1337${image.data[0].attributes.formats.thumbnail.url}`


  // console.log(image.data[0].attributes.formats.thumbnail.url);
  console.log('authors',authors);



  const smallImg = `http://localhost:1337${image.data[0].attributes.formats.small.url}`

  // console.log('images-----------',post.map(post => post.attributes.image.data));



  return (
    <div className="lg:flex">
      <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={smallImg} alt="" />
      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <Link href={`/blog/${post.attributes.slug}`}>
          <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
            {post.attributes.title}
          </a>
        </Link>
        <div className="avatar">
          <div className="w-12 mask mask-squircle">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-300">{post.attributes.createdAt.substring(0, 10)}</span>
        <h1>Kitti</h1>
      </div>
    </div>
  )


  // return (
  //   <Link href={`blog/${post.attributes.slug}`}>
  //     <div className="card w-96 bg-base-100 shadow-xl image-full">
  //       <figure>
  //         {/* <Image src={smallImg} width={50} height={38} layout='responsive'  /> */}
  //         <img src={smallImg} alt="Shoes" className="rounded-xl" />
  //       </figure>
  //       <div className="card-body">
  //         <h2 className="card-title">
  //           <div className="badge badge-secondary">NEW</div>
  //         </h2>
  //         <p>{excerpt}</p>
  //         <div className="card-actions justify-end">
  //           {authors.data.map((author: any) => {
  //             return (
  //               <div className="badge badge-outline">{author.attributes.name}</div>
  //             )
  //           })}
  //           {categories.data.map((category: any) => {
  //             return (
  //               <div className="badge badge-outline">{category.attributes.name}</div>
  //             )
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </Link>
  // )
}
