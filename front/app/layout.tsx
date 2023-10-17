import PlausibleProvider from 'next-plausible';
import "tailwindcss/tailwind.css";
import { getBio } from "../lib/services";
import '../styles/global.css';
import { Providers } from './providers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Message } from '../lib/validator/message';

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let prompts: null | any = []
  const supabase = createServerComponentClient({cookies})

  const { email } = await getBio()
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    const { data } = await supabase
    .from('messages')
    .select('*')

    if (data) prompts = data
  }

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
          session={data.session}
        >
          {children}
        </Providers>
      </body>
    </html>
  )
}
