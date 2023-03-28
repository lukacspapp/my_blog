'use client'

import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Analytics } from "@vercel/analytics/react"
import clsx from "clsx"
import Inspect from "inspx"
import "tailwindcss/tailwind.css"
import NavigationBar from "../components/Navigation/Navigation"
import TransitionProvider from "../components/TransitionProvider"

export default function Page(): JSX.Element {


  return (
        <Inspect>
          <div className="mx-auto max-w-screen-lg">
            <span
              className={clsx(
                "rounded-full bg-gradient-to-r",
                "dark:from-rose-700 dark:via-pink-700 dark:to-purple-700 dark:opacity-60",
                "from-blue-300 via-cyan-300 to-green-300 opacity-70",
                "-z-50 aspect-square w-full max-w-screen-lg blur-3xl filter",
                "bottom-[calc(100%-200px)] dark:bottom-[calc(100%-180px)]",
                "fixed"
              )}
            />
          </div>
          <TooltipProvider>
            <NavigationBar />
          </TooltipProvider>
          <main className="body">
            <TooltipProvider>
              <TransitionProvider>
                <h1>sanyi</h1>
              </TransitionProvider>
            </TooltipProvider>
          </main>
          <>
          </>
          <Analytics />
        </Inspect>
  )
}

