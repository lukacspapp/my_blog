'use client'

import { Transition } from "@headlessui/react"
import { useEffect, useState } from "react"


export default function TransitionProvider({ children }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 600)

    return () => clearTimeout(timeout)
  }, [])


  return (
    <Transition
        show={show}
        enter="transition-all duration-500"
        enterFrom="scale-90 opacity-0"
        enterTo="scale-100 opacity-100"
      >
        {children}
      </Transition>
  )

}

