import * as Dialog from '@radix-ui/react-dialog';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Provider } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginDialog({ children }) {

  const router = useRouter()
  const supabase = createClientComponentClient()
  const [error, setError] = useState(null)

  async function signInWithProvider(provider: Provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    })
    router.refresh()
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
              <Dialog.Description className="text-gray-400 p-2 dark:text-gray-400 w-auto mt-2 block sm:flex justify-between items-center">
                <div className="flex flex-col sm:flex-wrap mb-4">
                  <button
                    onClick={() => signInWithProvider('github')}
                    aria-label="Continue with GitHub"
                    role="button"
                    className="py-2.5 px-3 transition-colors justify-center duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 border rounded-md border-solid border-gray-500 dark:border-gray-600 flex items-center"
                  >
                    <Github
                      className='w-6 h-6 dark:text-white text-black'
                    />
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
