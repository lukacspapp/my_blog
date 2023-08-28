'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useLoadingErrorStore } from "../../lib/store/loadingErrorStore"

export default function ChatHeader() {

  const supabase = createClientComponentClient()
  const setError = useLoadingErrorStore(state => state.setError)

  async function signout() {
    const { error } = await supabase.auth.signOut()

    if (error) setError(error)
  }

  return (
    <div className='w-full flex gap-3 justify-start items-center dark:text-white'>
      <div className='flex flex-col text-sm items-start'>
        <button
          onClick={signout}
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

function useErrorStore(arg0: (state: any) => any) {
  throw new Error("Function not implemented.")
}
