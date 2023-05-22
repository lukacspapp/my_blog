'use client'

import { Transition } from "@headlessui/react"
import clsx from "clsx"
import { useEffect, useState } from "react"
import AnimatedDescription from "./Description/AnimatedDescription"
import TypeWriter from "./TypeWriter"

const darkGradient = "bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-transparent bg-clip-text";
const lightGradient = "animate-text-shimmer bg-[linear-gradient(110deg,#f97316,45%,#f5f5f5,55%,#f97316)] bg-[length:250%_100%] dark:bg-[linear-gradient(110deg,#d1fb9d,45%,#6b46c1,55%,#d1fb9d)] inline-block cursor-ne-resize bg-clip-text text-transparent transition-transform ease-in-out hover:scale-105";

export default function About({bio}: any): JSX.Element {

  const {excerpt, name, skills, company} = bio

  const [show, setShow] = useState(false)
  const [, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 600)

    return () => clearTimeout(timeout)
  }, [])


  return (
    <>
      <AnimatedDescription title={name} description={excerpt} />
      <Transition
        show={show}
        enter="transition-all duration-500"
        enterFrom="scale-90 opacity-0"
        enterTo="scale-100 opacity-100"
      >
        <p className="text-gray-600 dark:text-gray-400">
          Web Developer fueled by{" "}
          <span className="group relative top-[7px] inline-block cursor-text overflow-hidden">
            <span className="invisible">passion for coding</span>
            <span
              className={clsx(
                darkGradient,
                "absolute top-0 left-0 group-hover:-translate-y-full",
                "transition-transform duration-500 ease-in-out hover:duration-300"
              )}
            >
              passion for coding
            </span>
            <span
              className={clsx(
                darkGradient,
                "absolute top-0 left-0 translate-y-full group-hover:translate-y-0",
                "transition-transform duration-500 ease-in-out hover:duration-300"
              )}
            >
              {' '}very strong coffee
            </span>
          </span>
          {" "}and relentless curiosity,
          <br />
          <span
            className={clsx(
              "bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500",
              "after:bg-gradient-to-r",
              "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-[129px]",
              "after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100",
              "after:transition-transform after:duration-300 after:ease-in-out"
            )}
          >
            eagerly mastering
          </span>
          {" "} skills in
          <span className="group relative">
            <span
              className={clsx(
                "absolute -inset-0",
                "bg-gradient-to-r from-blue-500 to-purple-400",
                "rounded-lg opacity-20 blur group-hover:opacity-40 group-hover:blur-md",
                "animate-tilt transition-all duration-300 ease-in-out"
              )}
            ></span>
            <span
              className={clsx(
                'relative bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent'
              )}
            >
              {" "} <TypeWriter vocations={skills} />
            </span>
          </span>
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Working at{" "}
          <a
            className={clsx(
              lightGradient
            )}
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.name}
          </a>
        </p>
      </Transition>
    </>
  )
}