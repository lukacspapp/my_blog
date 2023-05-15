import { DocumentDuplicateIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import * as Dialog from '@radix-ui/react-dialog';
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";


const Toast = ({ message, id, removeToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 1500);

    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <div
      className="fixed inset-x-0 top-0 flex justify-center items-center z-50"
    >
      <div
        className="m-3 py-2 px-3 rounded-md bg-white dark:bg-[#0a0a0a] dark:text-white text-black border-gray-500 border dark:border-gray-400 text-center shadow-lg animate-slide-down-up"
      >
        {message}
      </div>
    </div>
  );
};


export function ContactDialog({ children }) {

  const [toasts, setToasts] = useState<{ id: string; message: string }[]>([]);
  const [isActive, setIsActive] = useState(false);

  const handleTouchStart = () => {
    setIsActive(true);
  };

  const handleTouchEnd = () => {
    setIsActive(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("papplukacs@hotmail.com");

    // Add a new toast with a unique id
    setToasts((oldToasts) => [...oldToasts, { id: nanoid(), message: "Copied to clipboard!" }]);
  };

  const removeToast = (id) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          {children}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-[#fd9090] dark:bg-[#382173] opacity-70 fixed inset-0" />
          <div className="animate-slide-in fixed top-[50%] left-[50%]">
            <Dialog.Content
              className="animate-dialog-slide-in sm:bg-white border-gray-500 dark:border-gray-400 border flex flex-col justify-between items-stretch z-10 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] sm:width-[315px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] bg-[#ffffff] dark:bg-[#0a0a0a] p-[10px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
            >
              <Dialog.Title>
                <h1
                  className="text-black text-lg font-semibold dark:text-white flex-row justify-between p-4"
                >
                  Contact
                </h1>
              </Dialog.Title>
              <Dialog.Description
                className="text-gray-400 p-5 dark:text-gray-400 mt-2 block sm:flex justify-between items-center">
                <div
                  className="flex flex-col sm:flex-wrap mb-4"
                >
                  <p className='text-[18px] font-semibold text-black dark:text-white'>
                    Email
                  </p>
                  <p className='text-md text-gray-500 dark:text-gray-400'>
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
                      <p className='mr-1 text-md text-black dark:text-white'>Compose</p>
                      <PencilSquareIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </a>
                  </div>
                  <div
                    className="border-2 rounded-md border-gray-500 dark:border-gray-400"
                  >
                    <button
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                      className={`flex pl-3 p-2 dark:border-[#282828] transition-colors duration-300 ease-in-out rounded-md dark:hover:bg-gray-600 ${isActive ? "active" : ""}`}
                      onClick={handleCopy}
                    >
                      <p className="mr-1 text-black dark:text-white">Copy</p>
                      <DocumentDuplicateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </button>

                  </div>
                </div>
              </Dialog.Description>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
        {toasts.map((toast) => (
          <Toast key={toast.id} id={toast.id} message={toast.message} removeToast={removeToast} />
        ))}
      </Dialog.Root>
    </>
  )
}
