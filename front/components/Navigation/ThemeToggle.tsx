// @ts-nocheck
'use client'

import { useTheme } from "next-themes"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { linkStyle } from "../../styles/styles"

const DynamicDarkModeSwitch = dynamic(
  () => {
    const promise = import("react-toggle-dark-mode").then(module => module.DarkModeSwitch)
    return promise
  },
  { ssr: false, loading: () => <DarkModeSwitch checked={false} onChange={() => undefined} /> }
)

export default function ThemeToggle() {

  const { resolvedTheme, setTheme } = useTheme()
  const [, setMounted] = useState(false)


  function handleDarkModeSwitch() {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else if (resolvedTheme === "light") {
      setTheme("dark")
    }
  }

  useEffect(() => setMounted(true), [])

  return (
    <DynamicDarkModeSwitch
      className={linkStyle}
      checked={resolvedTheme === "dark"}
      onChange={handleDarkModeSwitch}
      size={20}
    />
  )

}