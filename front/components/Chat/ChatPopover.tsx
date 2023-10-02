'use client'

import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import ChatHeader from "./ChatHeader"
import Image from "next/image"
import { cn } from "../../lib/utils"
import { useUserStore } from "../../lib/store/userStore"

export default function ChatPopover({ prompts, getPrompts }) {

  const user = useUserStore(state => state.user)
  const isPrompsLeft = prompts.filter(m => m.isUserInput).length > 9

  const avatarImage = user && user.user.user_metadata.avatar_url

  const avatar =
    <div>
      {avatarImage &&
        <Image
          priority
          src={avatarImage}
          alt='avatar'
          width={120}
          height={120}
          className='rounded-full'
        />
      }
      <span className={cn(`top-0 left-9 absolute  w-3.5 h-3.5 animate-pulse ${isPrompsLeft ? 'bg-red-500' : "bg-green-400" } border-2 border-white dark:border-gray-800 rounded-full`)}></span>
    </div>

  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="fixed border dark:shadow-black border-[#e5e5e5] rounded-full dark:border-[#2c2c2c] right-8 bottom-8 dark:bg-gray-700 bg-white shadow-lg overflow-visible cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <button
          className="w-12 h-12 p-[3px] text-gray-500 dark:text-gray-400 overflow-auto"
        >
            {avatar}
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-white"
      >
        <div className="flex flex-col h-80">
          <ChatHeader prompts={prompts}/>
          <ChatMessages className="px-2 py-3 flex-1" prompts={prompts} />
          {!isPrompsLeft ? <ChatInput getPrompts={getPrompts} prompts={prompts} /> : null}
        </div>
      </PopoverContent>
    </Popover>
  )
}