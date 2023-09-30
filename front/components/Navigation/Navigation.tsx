'use client'

import { HomeIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { Clipboard, GitCommitIcon, Github, Linkedin, MailIcon, Youtube } from "lucide-react"
import { usePlausible } from 'next-plausible'
import Link from "next/link"
import { useEffect, useState } from "react"
import { linkStyle } from "../../styles/styles"
import { ContactDialog } from "./Contact/ContactDialog"
import ThemeToggle from "./ThemeToggle"

const iconStyle = "h-5 w-5 cursor-pointer"
const transitionStyle = "duration-300"

type NavigationProps = {
  email: string
}

export default function Navigation({ email }: NavigationProps) {

  const plausible = usePlausible()

  const [, setMounted] = useState(false)
  const [showBlur, setShowBlur] = useState(false)

  // When mounted on client, show theme switcher
  useEffect(() => setMounted(true), [])

  // Sticky Scroll Listener
  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY
      setShowBlur(position > 40)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        "sticky top-0 z-30 mb-10 bg-gray-50 dark:bg-gray-900",
        "transition-[background-color]",
        showBlur
          ? "bg-opacity-20 backdrop-blur dark:bg-opacity-20"
          : "bg-opacity-0 backdrop-blur-none dark:bg-opacity-0",
        transitionStyle
      )}
    >
      <div className="body">
        <nav className="flex items-center justify-between space-x-3 py-5">
          <Link
            onClick={() => plausible('Home Link Clicked')}
            href="/"
            className={linkStyle}
          >
            <span className="sr-only">Home</span>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M19.5 10a.5.5 0 0 0-1 0h1Zm-14 0a.5.5 0 0 0-1 0h1Zm15.146 2.354a.5.5 0 0 0 .708-.708l-.708.708ZM12 3l.354-.354a.5.5 0 0 0-.708 0L12 3Zm-9.354 8.646a.5.5 0 0 0 .708.708l-.708-.708ZM7 21.5h10v-1H7v1ZM19.5 19v-9h-1v9h1Zm-14 0v-9h-1v9h1Zm15.854-7.354l-9-9l-.708.708l9 9l.708-.708Zm-9.708-9l-9 9l.708.708l9-9l-.708-.708ZM17 21.5a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5v1Zm-10-1A1.5 1.5 0 0 1 5.5 19h-1A2.5 2.5 0 0 0 7 21.5v-1Z"/>
</svg>
          </Link>

          <div className="flex-grow" />

          <Link
            onClick={() => plausible('Contributions Link Clicked')}
            href="/contributions" className={linkStyle}
          >
            <span className="sr-only">Contributions</span>
            <svg width="20" height="20" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16Zm-120 48a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"/>
</svg>
          </Link>
          <Link
            onClick={() => plausible('Projects Link Clicked')}
            href="/projects" className={linkStyle}
          >
            <span className="sr-only">Projects</span>
            <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 64h32a48 48 0 0 1 48 48v320a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V112a48 48 0 0 1 48-48h32"/>
    <rect width="160" height="64" x="176" y="32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="26.13" ry="26.13"/>
</svg>
          </Link>
          <ContactDialog
            email={email}
            children={
              <div className={linkStyle}>
                <span className="sr-only">Contact</span>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"/>
</svg>
              </div>
            }
          />

          <div className="divider-y h-5" />

          <a
            onClick={() => plausible('LinkedIn Link Clicked')}
            className={clsx(linkStyle, "cursor-ne-resize")}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lukacsjpapp/"
          >
            <span className="sr-only">LinkedIn Account</span>
            <svg width="20" height="20" strokeWidth='1.5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"/>
</svg>
          </a>
          <a
            onClick={() => plausible('GitHub Link Clicked')}
            className={clsx(linkStyle, "cursor-ne-resize")}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lukacspapp/"
          >
            <span className="sr-only">GitHub account</span>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14a.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028a1.832 1.832 0 0 0-.542-.875a8.014 8.014 0 0 0 2.038-.471a4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13a4.138 4.138 0 0 0-.26-1.476a3.892 3.892 0 0 0-.795-1.284a2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604c0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763a.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26a6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0a13.507 13.507 0 0 0-.572-.362a6.022 6.022 0 0 0-.672-.342a4.516 4.516 0 0 0-.705-.261a2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02a5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773c0 .202.017.404.051.604c.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476a6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633a2.99 2.99 0 0 0-.2.744a2.754 2.754 0 0 1-1.175.27a1.788 1.788 0 0 1-1.065-.3a2.904 2.904 0 0 1-.752-.824a3.1 3.1 0 0 0-.292-.382a2.693 2.693 0 0 0-.372-.343a1.841 1.841 0 0 0-.432-.24a1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02a.408.408 0 0 0-.13.06a.116.116 0 0 0-.06.1a.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333c.112.098.213.209.3.33c.09.119.168.246.231.381c.073.134.15.288.231.463c.188.474.522.875.954 1.145c.453.243.961.364 1.476.351c.174 0 .349-.01.522-.03c.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"/>
</svg>
          </a>
          <a
            onClick={() => plausible('Youtube Link Clicked')}
            className={clsx(linkStyle, "cursor-ne-resize")}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@lukacspapp59"
          >
            <span className="sr-only">Youtube account</span>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1.5">
        <path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14 12l-3.5 2v-4l3.5 2Z"/>
        <path d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274c.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065c2.851.081 4.277.121 5.182 1.053c.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275c-.906.931-2.331.972-5.183 1.052c-1.35.039-2.73.066-3.912.066a141.1 141.1 0 0 1-3.912-.066c-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708Z"/>
    </g>
</svg>
          </a>

          <div className="divider-y h-5" />
          <ThemeToggle />
        </nav>
        <div
          className={clsx("divider-x transition-opacity", transitionStyle, showBlur ? "opacity-100" : "opacity-0")}
        />
      </div>
    </header>
  )
}