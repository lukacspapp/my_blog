import { DocumentDuplicateIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import * as Dialog from '@radix-ui/react-dialog';

const DialogDemo = ({ children }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      {children}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[#fd9090] dark:bg-[#382173] opacity-70 fixed inset-0" />
      <div className="animate-slide-in fixed top-[50%] left-[50%]">
        <Dialog.Content
          className="animate-dialog-slide-in border-gray-500 dark:border-gray-400 border flex flex-col justify-between items-stretch z-10 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] bg-[#ffffff] dark:bg-[#0a0a0a] p-[10px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <Dialog.Title className="text-black dark:text-white text-lg flex-row justify-between p-4 font-medium">
            Contact
          </Dialog.Title>
          <Dialog.Description className="text-gray-400 p-5 dark:text-gray-400 mt-2 mb-4 items-center">
            <div
              className="flex flex-row justify-between items-center space-x-6"
            >
              <div
                className="flex flex-col"
              >
                <p className='mb-1 text-black dark:text-white'>
                  Email
                </p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  papplukacs@hotmail.com
                </p>
              </div>
              <div
                className="flex flex-row items-start space-x-2"
              >
                <div
                  className="border-2 mb-2 rounded-md border-gray-500 dark:border-gray-400"
                >
                  <a
                    href="mailto:papplukacs@hotmail.com"
                    className="  flex dark:border-[#282828] pl-3 pt-2 pr-2 pb-2 transition-colors duration-300 ease-in-out hover:bg-gray-300 rounded-md dark:hover:bg-gray-600"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p className='mr-1 text-gray-500 dark:text-gray-400'>Compose</p>
                    <PencilSquareIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </a>
                </div>
                <div
                  className="border-2 rounded-md border-gray-500 dark:border-gray-400"
                >
                  <button
                    className="flex pl-3 p-2 dark:border-[#282828] transition-colors duration-300 ease-in-out hover:bg-gray-300 rounded-md dark:hover:bg-gray-600"
                    onClick={() => {
                      navigator.clipboard.writeText("papplukacs@hotmail.com");
                    }}
                  >
                    <p className="mr-1 text-gray-500 dark:text-gray-400">Copy</p>
                    <DocumentDuplicateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

          </Dialog.Description>
        </Dialog.Content>
      </div>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
