import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCards({ }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#353d4c] p-10 hover:opacity-100
      opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/110684653_168383588102008_8253698541565294485_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=NDHn6nFKpMEAX97whTr&_nc_ht=scontent-lhr8-2.xx&oh=00_AfBEwlyeciOg7xFtNFgQayDX5EnfF6MbO7AgUK0XoVI1aQ&oe=63B2F856'
        alt='avatar'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of Berci LTD</h4>
        <p className='font-bold text-2xl mt-1'>Berci LTD</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" alt="" />
          <img className='h-10 w-10 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" alt="" />
          <img className='h-10 w-10 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" alt="" />
        </div>
        <p className='uppercase'>Started Work -Ended...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  )
}