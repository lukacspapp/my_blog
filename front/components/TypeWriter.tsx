'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

type TypeWriterProps = {
  vocations: string
}

export default function TypeWriter ({vocations}) {

  const [text] = useTypewriter({
    words: vocations.split(', '),
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  return (
    <>
      <span>{text}.</span>
      <Cursor  cursorColor='white' />
    </>
  )
}