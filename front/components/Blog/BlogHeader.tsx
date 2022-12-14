import Link from 'next/link'
import React from 'react'

type Props = {}

export default function BlogHeader({ }: Props) {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href={'/blog'} >
          <img className='w-50 h-50 rounded-full' src="https://media-exp1.licdn.com/dms/image/C4D03AQHoz1BKTkUXBQ/profile-displayphoto-shrink_100_100/0/1649069515182?e=1676505600&v=beta&t=pC5lBgrDLHsTjtsDPde1JeGOqwALIw2eTnSCCJ2Y4TE" alt="sanyi" />
        </Link>
        <h1>Sanyi</h1>
      </div>

      <div>
        <Link href={'/'} className='px-5 py-3 text-sm md:text-base bg-red-500 text-[#F7AB0A] flex items-center text-center rounded-full'>
          Go to my Portfolio
        </Link>
      </div>
    </header>
  )
}