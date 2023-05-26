'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

type TypeWriterProps = {
  vocations: string
}

export default function TypeWriter({ vocations }: TypeWriterProps) {

  const [text, isDone] = useTypewriter({
    words: vocations.split(', '),
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  return (
    <>
      <span>{text}.</span>
      {isDone && <Cursor cursorColor='white' />}
    </>
  )
}
