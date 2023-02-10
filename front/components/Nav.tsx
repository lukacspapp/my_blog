import { HomeIcon, UserIcon, ClipboardIcon, BriefcaseIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid"
import { Link } from 'react-scroll';
export function Nav() {



  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20  h-[96px] backdrop-blur-2xl rounded-full">
          <HomeIcon />
        </div>
      </div>
    </nav>
  )
}