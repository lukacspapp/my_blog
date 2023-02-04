import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type experiencesProps = {
  experiences: any,
}

export default function Experience({ experiences }: experiencesProps) {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
      max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase text-2xl tracking-[15px]'>Experience</h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        {experiences.map((experience: any) => {
          return (
            <ExperienceCard key={experience.id} experience={experience} />
          )
        })}
      </div>
    </motion.div>
  )
}