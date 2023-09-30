import * as Dialog from '@radix-ui/react-dialog';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Provider } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { Github, Chrome } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginDialog({ children }) {

  const router = useRouter()
  const supabase = createClientComponentClient()
  const [error, setError] = useState(null)

  async function signInWithProvider(provider: Provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null)
    }, 2000)
    return () => clearTimeout(timer)
  }, [error])


  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
        <Dialog.DialogPortal>
          <Dialog.Overlay className="bg-[#fd9090] dark:bg-[#382173] opacity-70 fixed inset-0" />
          <div className="animate-slide-in fixed top-[50%] left-[50%]">
            <Dialog.Content
              className="animate-dialog-slide-in items-center sm:bg-white border-gray-500 dark:border-gray-600 border border-opacity-100 flex flex-col justify-between z-10 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] sm:width-[315px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] bg-[#ffffff] dark:bg-[#0a0a0a] p-[10px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
            >
              <Dialog.Title>
                <p className="text-black text-lg font-semibold dark:text-white flex-row justify-between p-2">
                  Sign In
                </p>
              </Dialog.Title>
              <Dialog.Description className="text-gray-400 p-2 dark:text-gray-400 w-max mt-2 block sm:flex justify-between items-center">
                <div className='flex space-x-10 mb-2'>
                  <button
                    onClick={() => signInWithProvider('github')}
                    aria-label="Continue with GitHub"
                    role="button"
                    className="py-2.5 px-3 transition-colors justify-center duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 border rounded-md border-solid border-gray-500 dark:border-gray-600 flex items-center"
                  >
                    <p className='mr-2 dark:text-white text-black text-md'>
                      GitHub
                    </p>
                    <svg width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => signInWithProvider('google')}
                    aria-label="Continue with GitHub"
                    role="button"
                    className="py-2.5 px-3 transition-colors justify-center duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 border rounded-md border-solid border-gray-500 dark:border-gray-600 flex items-center"
                  >
                    <p className='mr-2 dark:text-white text-black text-md'>
                      Google
                    </p>
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9c0 .66.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49Z" />
                    </svg>
                  </button>
                </div>
              </Dialog.Description>
              {error && (
                <Dialog.Description className="text-red-500 p-2 dark:text-red-500 w-auto block sm:flex justify-between items-center">
                  <p className="text-sm font-semibold">
                    There was a problem with Logging you in.
                  </p>
                </Dialog.Description>
              )}
            </Dialog.Content>
          </div>
        </Dialog.DialogPortal>
      </Dialog.Root>
    </>
  );
}
