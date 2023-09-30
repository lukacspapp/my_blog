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
              <path fill="currentColor" fill-rule="evenodd" d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-9-9Z" clip-rule="evenodd" />
            </svg>
          </Link>

          <div className="flex-grow" />

          <Link
            onClick={() => plausible('Contributions Link Clicked')}
            href="/contributions" className={linkStyle}
          >
            <span className="sr-only">Contributions</span>
            <svg width="20" height="20" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M256 128a8 8 0 0 1-8 8h-64.58a56 56 0 0 1-110.84 0H8a8 8 0 0 1 0-16h64.58a56 56 0 0 1 110.84 0H248a8 8 0 0 1 8 8Z" />
            </svg>
          </Link>
          <Link
            onClick={() => plausible('Projects Link Clicked')}
            href="/projects" className={linkStyle}
          >
            <span className="sr-only">Projects</span>
            <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M5.085 2A1.5 1.5 0 0 1 6.5 1h3a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2h.585ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z" />
            </svg>
          </Link>
          <ContactDialog
            email={email}
            children={
              <div className={linkStyle}>
                <span className="sr-only">Contact</span>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M0 0h24v24H0z" />
                    <path fill="currentColor" d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066L22 7.535z" />
                    <path fill="currentColor" d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a2.999 2.999 0 0 1 2.354-1.42L5 4h14z" />
                  </g>
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
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
            <svg width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </a>
          <a
            onClick={() => plausible('Youtube Link Clicked')}
            className={clsx(linkStyle, "cursor-ne-resize")}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UC1H__pt-4BY3_V4dpHCescA"
          >
            <span className="sr-only">Youtube account</span>
            <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
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