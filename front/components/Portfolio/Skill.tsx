import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean
  technology?: any
}

export default function Skill({ directionLeft, technology }: Props) {


  return (
    <div className='text-center cursor-pointer p-2 w-[80%]'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={technology.image.url}
        className='bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-3xl p-4 object-contain h-10 w-10 md:w-28 md:h-28 xl:object-scale-down xl:w-32 xl:h-32
        filter grayscale hover:grayscale-0 transition duration-300 ease-in-out'
      />
    </div>
  )
}
