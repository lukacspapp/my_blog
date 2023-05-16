
import "tailwindcss/tailwind.css"
import About from "../components/About"
import { getBio } from "../lib/services"

export default async function Page() {

  const bio = await getBio()

  return (
    <>
      <main className="body">
        <About bio={bio}/>
        {/* <Chat /> */}
      </main>
    </>
  )
}