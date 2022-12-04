import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type TypeWriterProps = {
  vocations: string
}

export default function TypeWriter({ vocations }: TypeWriterProps) {

  const [text, count] = useTypewriter({
    words: vocations.split(', '),
    loop: false,
    delaySpeed: 2000,
  })


  return (
    <>
      <span className='mr-3'>{text}</span>
      <Cursor cursorColor='white' />
    </>
  )
}