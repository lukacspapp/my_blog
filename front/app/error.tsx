'use client';

import { Transition } from '@headlessui/react';
import { RefreshCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import "tailwindcss/tailwind.css";
import AnimatedDescription from '../components/Description/AnimatedDescription';

const title = "404"
const description = "Something Went Wrong"

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {

  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 600)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='body'>
      <AnimatedDescription title={title} description={description} hideBreak />
      <Transition
        show={show}
        enter="transition-all duration-500"
        enterFrom="scale-90 opacity-0"
        enterTo="scale-100 opacity-100"
      >
        <p className='text-center text-gray-600 dark:text-gray-400'>
          {error.name}
          <br />
          <p
            className='inline-block px-4 py-2 text-sm font-bold text-gray-600 dark:text-gray-400 bg-gray-800 rounded-md'
          >
            {error.message}
          </p>
        </p>
        <br />
        <div className='flex flex-row justify-center space-x-2'>
          <div
            className="border-2 mb-2 rounded-md border-gray-500 dark:border-gray-600"
          >
            <button
              onClick={() => {router.push('/')}
              }
              className="flex cursor-pointer dark:border-[#282828] rounded-[3px] pl-3 pt-2 pr-2 pb-2 transition-colors duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <p className='mr-1 text-md text-black dark:text-white'>
                Refresh
              </p>
              <RefreshCcw className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
}