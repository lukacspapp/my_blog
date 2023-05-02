
import "tailwindcss/tailwind.css"
import About from "../components/About"
import Chat from "../components/Chat/Chat"

export default function Page(): JSX.Element {

  return (
    <>
      <main className="body">
        <About />
        <Chat />
      </main>
    </>
  )
}