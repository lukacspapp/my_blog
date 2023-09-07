'use client'

import { LogIn } from "lucide-react"
import LoginDialog from "./LoginDialog"
import { useUserStore } from "../../lib/store/userStore"
import Image from "next/image"

export default function Login() {

  const user = useUserStore(state => state.user)
  const avatarImage = user && user.session.user.user_metadata.avatar_url

  const avatar =
    <div>
      <Image width={10} height={10} className="w-10 h-10 rounded-full" src={avatarImage} alt=""/>
      <span className="top-0 left-7 absolute  w-3.5 h-3.5 animate-pulse bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>

  return (
    <div
      className='fixed border dark:shadow-black border-[#e5e5e5] rounded-full dark:border-[#2c2c2c] right-8 bottom-8 dark:bg-gray-700 bg-white shadow-lg overflow-hidden'
    >
      <button
        className="dark:bg-black/10 bg-white flex cursor-pointer items-center rounded-[3px] p-3 transition-colors duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {avatar}
      </button>
    </div>
  )
}