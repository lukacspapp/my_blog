import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {
  technologies: [any],
}

export default function Skills({ technologies }: Props) {


console.log(technologies);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto'>
      <h3 className='absolute top-24 uppercase text-2xl tracking-[15px]'>Skills</h3>

      <div className='flex flex-row flex-wrap w-90 m-2'>
        {technologies.map((technology: any) => {
          return (
            <Skill
              key={technology.name}
              technology={technology}
            />
          )
        })}
      </div>
    </motion.div>
  )
}