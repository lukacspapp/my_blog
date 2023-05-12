import { EnvelopeIcon } from "@heroicons/react/24/outline";
import * as Dialog from '@radix-ui/react-dialog';

const DialogDemo = ({ children }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      {children}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[#101010] opacity-70 fixed inset-0" />
      <div className="animate-slide-in fixed top-[50%] left-[50%]">
        <Dialog.Content
          className="animate-dialog-slide-in flex flex-col justify-between items-stretch z-10 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] bg-[#202020] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <Dialog.Title className="text-gray-600 dark:text-gray-400 m-0 text-lg flex-row justify-between p-4 font-medium">
            Contact
          </Dialog.Title>
          <Dialog.Description className="text-gray-600 p-4 dark:text-gray-400 mt-2 mb-4 items-center">
            Email {` `}
            <EnvelopeIcon className="h-5 w-5 inline-block" />
            {` `}
            <a
              className="text-violet11 hover:text-violet10 dark:text-violet9 dark:hover:text-violet8"
              href="mailto:papplukacs@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              papplukacs@hotmail.com
            </a>
          </Dialog.Description>
        </Dialog.Content>
      </div>
    </Dialog.Portal>
  </Dialog.Root>
);


export default DialogDemo;