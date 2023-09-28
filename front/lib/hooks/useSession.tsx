'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"

export function useSession() {

  const supabase = createClientComponentClient()

  const [session, setSession] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  async function useSession() {

    try {

      const { data, error } = await supabase.auth.getSession()

      if (error) setError(error)

      setSession(data.session)

    } catch (error) {

      setError(error)

    }
  }

  useEffect(() => {
    useSession()
  }, [])

  return { session, error }
}