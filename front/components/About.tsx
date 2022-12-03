import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
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
        src='https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/279085132_574857057454657_273421715507861464_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=68SG7dFz9nUAX8niHJP&_nc_ht=scontent-lhr8-2.xx&oh=00_AfCD9N-p6XvzQnHcTbTYno8zJDqQfiKbrZt54jq8IciknQ&oe=639103D9'>
      </motion.img>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold '>Here is a little background</h4>
        <p className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit sed, error ducimus ut eius deserunt accusamus excepturi, ex saepe voluptatum expedita rem qui quae harum? Recusandae maiores similique quaerat dolorem.</p>
      </div>
    </motion.div>
  )
}