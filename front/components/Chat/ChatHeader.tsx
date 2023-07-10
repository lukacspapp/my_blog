'use client'

import { signOut } from "next-auth/react"

export default function ChatHeader() {
  return (
    <div className='w-full flex gap-3 justify-start items-center dark:text-white'>
      <div className='flex flex-col text-sm items-start'>
        <button
          onClick={() => {
            signOut()
          }}
        >
          Sign Out
        </button>
        <p className="text-sm">
          Chat with
        </p>
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          <p className="font-medium"> Me</p>
        </div>
      </div>
    </div>
  )
}