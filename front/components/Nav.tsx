import { HomeIcon, UserIcon, ClipboardIcon, BriefcaseIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { MutableRefObject, useRef, memo, ReactElement } from "react";
import { Link } from 'react-scroll'
import { useStore, useStoreActions } from "../store";

const dockButtons: { title: string; logo: ReactElement }[] = [
  {
    title: 'Home',
    logo: <HomeIcon />
  },
  {
    title: 'About',
    logo: <UserIcon />
  },
  {
    title: 'Experience',
    logo: <ClipboardIcon />
  },
  {
    title: 'Skills',
    logo: <BriefcaseIcon />
  },
  {
    title: 'Contact',
    logo: <ChatBubbleBottomCenterIcon />
  }
]

export function Nav() {

  const dockButtonsWrapper =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
  const closeMenu = true

  const handleItemsMouseEnter = (itemIndex: number) => {
    const expandSize = 8

    const buttonElements = dockButtonsWrapper.current
      .children as HTMLCollectionOf<HTMLDivElement>

    buttonElements[itemIndex].style.width = `${expandSize}rem`

    if (itemIndex > 0 && buttonElements[itemIndex - 1]) {
      buttonElements[itemIndex - 1].style.width = `${expandSize - 1.5}rem`
    }

    if (itemIndex > 0 && buttonElements[itemIndex - 2]) {
      buttonElements[itemIndex - 2].style.width = `${expandSize - 2.5}rem`
    }

    if (itemIndex < dockButtons.length - 1 && buttonElements[itemIndex + 1]) {
      buttonElements[itemIndex + 1].style.width = `${expandSize - 1.5}rem`
    }

    if (itemIndex < dockButtons.length - 1 && buttonElements[itemIndex + 2]) {
      buttonElements[itemIndex + 2].style.width = `${expandSize - 2.5}rem`
    }
  }

  const handleItemsMouseLeave = (itemIndex: number) => {
    const unexpandSize = 4

    const buttonElements = dockButtonsWrapper.current
      .children as HTMLCollectionOf<HTMLDivElement>

    buttonElements[itemIndex].style.width = `${unexpandSize}em`

    if (itemIndex > 0 && buttonElements[itemIndex - 1]) {
      buttonElements[itemIndex - 1].style.width = `${unexpandSize}em`
    }

    if (itemIndex > 0 && buttonElements[itemIndex - 2]) {
      buttonElements[itemIndex - 2].style.width = `${unexpandSize}em`
    }

    if (itemIndex < dockButtons.length - 1 && buttonElements[itemIndex + 1]) {
      buttonElements[itemIndex + 1].style.width = `${unexpandSize}em`
    }

    if (itemIndex < dockButtons.length - 1 && buttonElements[itemIndex + 2]) {
      buttonElements[itemIndex + 2].style.width = `${unexpandSize}em`
    }
  }

  const handleItemsClick = () => {
    if (closeMenu) {
      // closeMenu()
    }
  }



  return (
    <div
      ref={dockButtonsWrapper}
      className="flex h-10 flex-row justify-center items-end bg-white fixed bottom-2 left-0 right-0 px-1 bg-opacity-10 w-max m-auto rounded-xl"
    >
      {dockButtons.map((item: { title: string; logo: ReactElement }, i: number) => (
        <button
          key={item.title}
          className="w-16 align-bottom dock-item p-2"
          style={{ transition: 'all ease .2s' }}
          onMouseEnter={() => handleItemsMouseEnter(i)}
          onMouseLeave={() => handleItemsMouseLeave(i)}
          onClick={() => handleItemsClick()}
        >
          {item.logo}
        </button>
      ))}
    </div>
  )
}