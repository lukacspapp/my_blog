'use client'

import { ChatBubbleLeftIcon, ClipboardIcon, CommandLineIcon, HomeIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { usePlausible } from 'next-plausible'
import Link from "next/link"
import { useEffect, useState } from "react"
import { linkStyle } from "../../styles/styles"
import { ContactDialog } from "./Contact/ContactDialog"
import ThemeToggle from "./ThemeToggle"

// Source: https://github.com/vercel/next.js/issues/4515#issuecomment-810635574

const iconStyle = "h-5 w-5"
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
            <CommandLineIcon className={iconStyle} />
          </Link>
          <Link
            onClick={() => plausible('Projects Link Clicked')}
            href="/projects" className={linkStyle}
          >
            <span className="sr-only">Projects</span>
            <ClipboardIcon className={iconStyle} />
          </Link>
          <ContactDialog
            email={email}
            children={
              <div className={linkStyle}>
                <span className="sr-only">Contact</span>
                <ChatBubbleLeftIcon className={iconStyle} />
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
            <svg className={iconStyle} viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.44 20.452H3.957V9h3.483v11.452zM5.7 7.667a2.038 2.038 0 01-2.042-2.043A2.038 2.038 0 015.7 3.58a2.038 2.038 0 012.042 2.044c0 1.128-.915 2.043-2.042 2.043zm15.154 12.785h-3.486v-5.954c0-1.423-.026-3.253-1.972-3.253-1.975 0-2.277 1.546-2.277 3.146v6.061H9.632V9h3.349v1.565h.046c.466-.883 1.604-1.814 3.3-1.814 3.533 0 4.175 2.328 4.175 5.355v6.346z"
              />
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
            <svg className={iconStyle} viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              />
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