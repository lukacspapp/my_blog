'use client'

import { LogIn } from "lucide-react"
import LoginDialog from "./LoginDialog"
import { useUserStore } from "../../lib/store/userStore"
import Image from "next/image"

export default function Login() {

  return (
    <div
      className='fixed border dark:shadow-black border-[#e5e5e5] rounded-full dark:border-[#2c2c2c] right-8 bottom-8 dark:bg-gray-700 bg-white shadow-lg overflow-hidden'
    >
      <button
        className="dark:bg-black/10 bg-white flex cursor-pointer items-center rounded-[3px] p-3 transition-colors duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <LoginDialog>
          <LogIn className="h-5 w-5"/>
        </LoginDialog>
      </button>
    </div>
  )
}