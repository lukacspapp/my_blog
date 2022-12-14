import React from 'react'

type Props = {}

export default function Banner({ }: Props) {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl'>My Blog</h1>
        <h2 className='mt-5 md:mt-0'>
          Welsome to my blog where I write about my stuff
        </h2>
      </div>
      <p className='mt-5 md:mt-2 max-w-sm'>
        Blog about my stuff
      </p>
    </div>
  )
}