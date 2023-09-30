'use client'

import { LogIn } from "lucide-react"
import LoginDialog from "./LoginDialog"

export default function Login() {

  return (
    <div
      className='fixed border dark:shadow-black border-[#e5e5e5] rounded-full dark:border-[#2c2c2c] right-8 bottom-8 dark:bg-gray-700 bg-white shadow-lg overflow-hidden'
    >
      <button
        className="dark:bg-black/10 bg-white flex cursor-pointer items-center rounded-[3px] p-3 transition-colors duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <LoginDialog>
        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21h-7Zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5l-5 5Z"/>
</svg>
        </LoginDialog>
      </button>
    </div>
  )
}