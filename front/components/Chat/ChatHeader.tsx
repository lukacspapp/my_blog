'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"
import { useUserStore } from "../../lib/store/userStore"
import { useMessagesStore } from "../../lib/store/messagesStore"
import { useRouter } from "next/navigation"

export default function ChatHeader({ prompts }) {

  const router = useRouter()
  const supabase = createClientComponentClient()
  const setUser = useUserStore(state => state.setUser)
  const setMessages = useMessagesStore(state => state.setMessages)
  const [msg, setMsg] = useState(prompts)

  const isPrompsLeft = msg.filter(m => m.isUserInput).length > 9

  async function signout() {
    const { error } = await supabase.auth.signOut()

    if (!error) {
      setUser(null)
      setMessages([])
      router.push('/')
    }
  }

  useEffect(() => {
    setMsg(prompts)
  },[prompts])

  return (
    <div className='w-full flex gap-3 justify-between items-center p-2 dark:text-white border-b-[1px] border-gray-500'>
      <div className='flex flex-grow text-sm items-start justify-start'>
        <div className='flex gap-1.5 items-center'>
          {!isPrompsLeft ? (
            <span className='text-green-400'>
              {10 - msg.filter(m => m.isUserInput).length} prompts left
            </span>
          ) : (
            <span className='text-red-500'>
              You have no prompts left
            </span>
          )}
        </div>
      </div>
      <div>
        <button
          onClick={signout}
          className='border text-md border-solid border-gray-500 rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 ease-in-out'
        >
          Sign out
        </button>
      </div>
    </div>
  );

}