'use client'

import { Transition } from "@headlessui/react"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { descriptionStyle, titleStyle } from "../../styles/styles"
import { DescriptionType } from "../../types/portfolioTypes"

export default function AnimatedDescription({ title, description, hideBreak = false }: DescriptionType) {
  const transition = "transition-all duration-500"
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <Transition show={show}>
      <Transition.Child
        enter={clsx(transition)}
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
      >
        <h1 className={titleStyle}>{title}</h1>
      </Transition.Child>
      <Transition.Child
        enter={clsx(transition, "delay-[300ms]")}
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
      >
        <p className={descriptionStyle}>{description}</p>
      </Transition.Child>
      {!hideBreak && (
        <Transition.Child enter={clsx(transition)} enterFrom="scale-x-0" enterTo="scale-x-100">
          <hr />
        </Transition.Child>
      )}
    </Transition>
  )
}
