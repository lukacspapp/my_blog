import "tailwindcss/tailwind.css";
import { getBio } from "../lib/services";
import '../styles/global.css';
import { Providers } from './providers';
import { createSupabaseServerClient } from '../lib/supabase/server';
import { Message } from '../lib/validator/message';

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let prompts: null | Message[] = []
  const supabase = await createSupabaseServerClient()

  const { email } = await getBio()
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    const { data } = await supabase
      .from('messages')
      .select('*')

    if (data) prompts = data
  }

  return (
    <html suppressHydrationWarning lang="en" className='nightwind h-full'>
      <body className="bg-gray-50 selection:bg-teal-300 selection:text-gray-900 dark:bg-gray-900 dark:selection:bg-rose-600 dark:selection:text-rose-50">
        <Providers
          email={email}
          prompts={prompts}
          session={session}
        >
          {children}
        </Providers>
      </body>
    </html>
  )
}
