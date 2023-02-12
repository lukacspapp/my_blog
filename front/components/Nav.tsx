import { HomeIcon, UserIcon, ClipboardIcon, BriefcaseIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-scroll'

export function Nav() {



  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 p-5">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 items-center h-[96px] backdrop-blur-2xl rounded-full mx-auto max-w-md px-5 flex justify-between text-2xl">
          <Link to='hero' className="cursor-pointer w-[40px] h-[40px] flex items-center" >
            <HomeIcon />
          </Link>
          <Link to='about' className="cursor-pointer w-[40px] h-[40px] flex items-center">
            <UserIcon />
          </Link>
          <Link to='experience' className="cursor-pointer w-[40px] h-[40px] flex items-center">
            <ClipboardIcon />
          </Link>
          <Link to='contact' className="cursor-pointer w-[40px] h-[40px] flex items-center">
            <ChatBubbleBottomCenterIcon />
          </Link>
          <Link to='skills' className="cursor-pointer w-[40px] h-[40px] flex items-center">
            <BriefcaseIcon />
          </Link>
        </div>
      </div>
    </nav>
  )
}