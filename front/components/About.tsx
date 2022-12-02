import React from 'react'

type Props = {}

export default function About({ }: Props) {
  return (
    <div className='h-screen flex-col text-center md:text-left relative flex md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px]'>About</h3>
    </div>
  )
}