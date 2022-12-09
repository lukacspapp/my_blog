import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  experience: any,
}

export default function ExperienceCards({ experience }: Props) {


  const { job_title, company_title, start_date, end_date } = experience
  const { url } = experience.attributes.image.data.attributes
  const technologies = experience.attributes.technologies.data

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
        className='w-32 h-32 rounded-full md:rounded-full md:h-25 md:w-25 xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={`http://localhost:1337${url}`}
        alt='avatar'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{job_title}</h4>
        <p className='font-bold text-2xl mt-1'>{company_title}</p>
        <div className='flex space-x-2 my-2'>
          {technologies.map(({ attributes }: any) => {
            return (
              <img className='h-10 w-10 md:h-7 md:w-7 rounded-lg object-cover' src={`http://localhost:1337${attributes.image.data.attributes.url}`} alt="" />
            )
          })}
        </div>
        <p className='uppercase'>{`${start_date} - ${end_date === null ? 'Present' : end_date}`}</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  )
}