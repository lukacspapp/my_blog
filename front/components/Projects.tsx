'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({ }: Props) {
  const pro = [1, 2, 3, 4, 5]
  return (
    <div className='h-screen relative flex flex-col overflow-x-hidden text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase text-2xl tracking-[20px]'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-track-gray scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gary-400 scrollbar-thumb-[#F7AB0A]/20'>
        {pro.map((p, i) => {
          return (
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/226654454/original/30d2f06521d6d7a7caedeed826d0056d17a00dfc/design-a-digital-product-mockup-and-online-course-bundle-fde3.png" alt="" />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>Case Study {i + 1} of {pro.length}: UPS clone</h4>
                <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil mollitia deserunt saepe hic possimus quia, ipsum, nostrum doloribus libero blanditiis voluptas vel accusamus sint placeat! Magni quia sed deleniti?</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='w-full absolute top-[30%] bg-yellow-500/10 left-0 h-[500px]
      -skew-y-12' />
    </div>
  )
}