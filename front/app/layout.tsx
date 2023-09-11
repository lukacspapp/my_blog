import PlausibleProvider from 'next-plausible';
import "tailwindcss/tailwind.css";
import { getBio } from "../lib/services";
import '../styles/global.css';
import { Providers } from './providers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { email } = await getBio()
  const supabase = createServerComponentClient({cookies})

  const { data: prompts , error } = await supabase
  .from('messages')
  .select('*')

  const { data, error: err } = await supabase.auth.getSession()


  return (
    <html suppressHydrationWarning lang="en" className='nightwind h-full'>
      <head>
        <PlausibleProvider
          domain="lukacsjpapp.com"
          trackFileDownloads={true}
        />
      </head>
      <body className="bg-gray-50 selection:bg-teal-300 selection:text-gray-900 dark:bg-gray-900 dark:selection:bg-rose-600 dark:selection:text-rose-50">
        <Providers
          email={email}
          prompts={prompts}
          session={data}
        >
          {children}
        </Providers>
      </body>
    </html>
  )
}
