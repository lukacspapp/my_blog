import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import TypeWriter from './TypeWriter'




export default function Hero({ hero }) {

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image className='relative rounded-full mx-auto object-cover' width={100} height={10} src={hero.profile.url} alt={hero.profile.url} />
      <div className='z-20'>
        <h2 className='mb-10 text-sm uppercase text-gray-500 tracking-[10px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <TypeWriter vocations={hero.vocations} />
        </h1>
        <div className='pt-5'>
          <Link href={'#about'}>
            <button className='heroButton'>About</button>
          </Link>
          <Link href={'#experience'}>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}