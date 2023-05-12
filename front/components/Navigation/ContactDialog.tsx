import { ClipboardIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
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
            <div
              className="flex flex-row justify-between pl-4 items-center"
            >
              <div
                className="flex flex-col w-52"
              >
                <p className='mb-1'>
                  Email
                </p>
                <p className='text-sm text-gray-500'>
                  papplukacs@hotmail.com
                </p>
              </div>
              <div
                className="flex flex-row rounded-md border-2 border-gray-500 dark:border-[#282828]"
              >
                <a
                  href="mailto:papplukacs@hotmail.com"
                  className=" border-r-2 flex dark:border-[#282828] pl-3 pt-2 pr-2 pb-2"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <ClipboardIcon className="h-5 w-5 text-gray-500" />
                  Compose
                </a>
                <button
                  className="flex pl-3 pt-2 pr-2 pb-2"
                  onClick={() => {
                    navigator.clipboard.writeText("papplukacs@hotmail.com");
                  }}
                >
                  <DocumentDuplicateIcon className="h-5 w-5 text-gray-500" />
                  Copy
                </button>
              </div>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </div>
    </Dialog.Portal>
  </Dialog.Root>
);


export default DialogDemo;