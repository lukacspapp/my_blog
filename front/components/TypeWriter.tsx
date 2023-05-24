'use client'

import { useEffect, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type TypeWriterProps = {
  vocations: string
}

export default function TypeWriter ({vocations}) {

  const [, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])


  const [text] = useTypewriter({
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