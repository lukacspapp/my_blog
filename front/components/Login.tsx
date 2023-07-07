'use client'

import { LogIn, LogInIcon } from "lucide-react"

export default function Login() {
  return (
    <div
      className='fixed border-2 mb-2 rounded-md border-gray-500 dark:border-gray-600 right-8 bottom-8 dark:bg-gray-700 bg-white shadow-lg overflow-hidden'
    >

      <button
        className="flex cursor-pointer items-center dark:border-[#282828] rounded-[3px] p-3 transition-colors duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <LogIn
          className="mr-1 h-5 w-5"
        />
        Login
      </button>
    </div>
  )
}