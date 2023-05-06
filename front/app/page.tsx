
import "tailwindcss/tailwind.css"
import About from "../components/About"

export default function Page(): JSX.Element {

  return (
    <>
      <main className="body">
        <About />
        {/* <Chat /> */}
      </main>
    </>
  )
}