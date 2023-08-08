
import "tailwindcss/tailwind.css"
import About from "../components/About"
import { getBio } from "../lib/services"
import Chat from "../components/Chat/Chat"
import Loginer from "../components/Auth/Loginer"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
export default async function Page() {

  const bio = await getBio()

  const supabase = createServerComponentClient({ cookies })

  let { data: chatPrompts, error } = await supabase
  .from('chat prompts')
  .select('*')

  console.log(chatPrompts)

  return (
    <>
      <main className="body">
        <About bio={bio}/>
      </main>
    </>
  )
}