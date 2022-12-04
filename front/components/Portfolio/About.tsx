import React from 'react'
import { motion } from 'framer-motion'

type AboutProps = {
  about: any
}

export default function About({ about }: AboutProps) {

  const { bio, title, photo } = about.attributes
  const { url } = photo.data.attributes

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center'
    >

      <h3 className='absolute top-24 uppercase text-2xl tracking-[20px]'>About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        src={`http://localhost:1337${url}`}>
      </motion.img>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold '>{title}</h4>
        <p className='text-base'>{bio}</p>
      </div>
    </motion.div>
  )
}