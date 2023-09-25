'use client'

import { HomeIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { Clipboard, GitCommitIcon, Github, Linkedin, MailIcon } from "lucide-react"
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
            <HomeIcon className={iconStyle} />
          </Link>

          <div className="flex-grow" />

          <Link
            onClick={() => plausible('Contributions Link Clicked')}
            href="/contributions" className={linkStyle}
          >
            <span className="sr-only">Contributions</span>
            <GitCommitIcon className={iconStyle} />
          </Link>
          <Link
            onClick={() => plausible('Projects Link Clicked')}
            href="/projects" className={linkStyle}
          >
            <span className="sr-only">Projects</span>
            <Clipboard className={iconStyle} />
          </Link>
          <ContactDialog
            email={email}
            children={
              <div className={linkStyle}>
                <span className="sr-only">Contact</span>
                <MailIcon className={iconStyle} />
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
            <Linkedin className={iconStyle}/>
          </a>
          <a
            onClick={() => plausible('GitHub Link Clicked')}
            className={clsx(linkStyle, "cursor-ne-resize")}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lukacspapp/"
          >
            <span className="sr-only">GitHub account</span>
            <Github className={iconStyle} />
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