"use client"

import { useState } from 'react'

export default function Clock() {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  function makeClock(): void {
    const now = new Date();
    const diff = now.getTime() - new Date(2021, 9, 20).getTime();

    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((diff % (1000 * 60)) / 1000))
  }

  setInterval(makeClock, 1000)



  return (
    <div className="grid container grid-flow-col gap-5 text-center auto-cols-max animate-pulse md:justify-center">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <div className="countdown font-mono text-5xl" x-text="days">{days}</div>
        <div className="font-mono uppercase text-sm leading-none">Days</div>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <div className="countdown font-mono text-5xl" x-text="days">{hours}</div>
        <div className="font-mono uppercase text-sm leading-none">{hours === 1 ? "Hour" : "Hours"}</div>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <div className="font-mono text-5xl" x-text="days">{minutes}</div>
        <div className="font-mono uppercase text-sm leading-none">{minutes === 1 ? "Minute" : "Minutes"}</div>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <div className="font-mono text-5xl" x-text="days">{seconds}</div>
        <div className="font-mono uppercase text-sm leading-none">{seconds === 1 ? 'Second' : "Seconds"}</div>
      </div>
    </div>
  )
}