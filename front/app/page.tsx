
import "tailwindcss/tailwind.css"
import About from "../components/About"
import { getBio } from "../lib/services"
import Chat from "../components/Chat/Chat"
import Loginer from "../components/Auth/Loginer"

export default async function Page() {

  const bio = await getBio()


  return (
    <>
      <main className="body">
        <About bio={bio}/>
      </main>
    </>
  )
}