'use client'

import { Transition } from "@headlessui/react"
import React from "react"

type ITransitionPage = {
  children: React.ReactNode
  title: string
  description: string
  type?: "article" | "website"
}

export default function TransitionPage({
  children,
  title,
  description,
  type = "website",
}: ITransitionPage): JSX.Element {

  return (
    <Transition
    appear
    show
    as="div"
    enter="transition duration-500 ease-in-out"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition duration-500 ease-in-out"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition>
  )

}