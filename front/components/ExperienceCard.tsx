'use client'

import { motion } from 'framer-motion'

type Props = {
  experience: any,
}

export default function ExperienceCards({ experience }: Props) {

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
        src={experience.image.url}
        alt='avatar'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.companyTitle}</p>
        <div className='flex space-x-2 my-2'>
          {experience.portfolioTechnologies.map(( technology : any) => {
            return (
              <img key={technology.id} className='h-10 w-10 md:h-7 md:w-7 rounded-lg object-cover' src={technology.image.url} alt={technology.image.name} />
            )
          })}
        </div>
        <p className='uppercase'>{`${experience.startDate} - ${!experience.end_date ? 'Present' : experience.end_date}`}</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {/* {experience.summaryPoint ?? experience.summaryPoints.split(',').map((point: string, i: Key) => {
            return (
              <li key={i}>{point}</li>
            )
          })} */}
        </ul>
      </div>
    </article>
  )
}