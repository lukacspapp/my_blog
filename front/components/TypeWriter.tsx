'use client'

import { ReactTyped } from 'react-typed'

type TypeWriterProps = {
  vocations: string
}

export default function TypeWriter({ vocations }: TypeWriterProps) {
  return (
    <>
      <ReactTyped
        strings={vocations.split(', ').map(vocation => `${vocation}.`)}
        loop={true}
        typeSpeed={70}
        backSpeed={50}
        backDelay={2000}
        showCursor={true}
        cursorChar="|"
        style={{ color: '#ef4444' }}
      />
    </>
  )
}
