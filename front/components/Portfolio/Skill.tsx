import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean
  technology?: any
}

export default function Skill({ directionLeft, technology }: Props) {

  const { url } = technology.attributes.image.data.attributes



  return (
    <div className='group relative flex cursor-pointer p-1'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={`http://localhost:1337${url}`}
        className=' rounded-full object-contain h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        filter grayscale hover:grayscale-0 transition duration-300 ease-in-out'
      />
    </div>
  )
}