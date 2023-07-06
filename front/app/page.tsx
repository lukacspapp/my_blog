
import "tailwindcss/tailwind.css"
import About from "../components/About"
import { getBio } from "../lib/services"
import Chat from "../components/Chat/Chat"
import { getServerSession } from "next-auth"

export default async function Page() {

  const session = await getServerSession()
  const bio = await getBio()

  return (
    <>
      <main className="body">
        <About bio={bio}/>
        <Chat />
      </main>
    </>
  )
}