'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

type TypeWriterProps = {
  vocations: string
}

export default function TypeWriter ({vocations}) {


  const [text, count] = useTypewriter({
    words: vocations.split(', '),
    loop: false,
    delaySpeed: 2000,
  })

  return (
    <>
      <span>{text}.</span>
      <Cursor cursorColor='white' />
    </>
  )
}