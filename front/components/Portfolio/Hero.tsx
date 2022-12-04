import Link from 'next/link'
import React, { useEffect } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import TypeWriter from './TypeWriter'




export default function Hero({ hero }) {

  const { vocations } = hero.attributes
  const { profile } = hero.attributes




  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='relative rounded-full h-32 w32 mx-auto object-cover' src='https://media-exp1.licdn.com/dms/image/C4D03AQHoz1BKTkUXBQ/profile-displayphoto-shrink_800_800/0/1649069515182?e=1675296000&v=beta&t=uQoZ5y2m6Y1bR0ew3RJx1Lq4XPfE-2S2JB8pTYUe-Ag' alt='me' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <TypeWriter vocations={vocations} />
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