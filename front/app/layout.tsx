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

  interface Prompt {
    text: string;
    id: string;
    isUserInput: boolean;
  }

  let prompts: Prompt[] = []
  const supabase = createServerComponentClient({ cookies })

  const { email } = await getBio()
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    const { data } = await supabase.from('messages').select('*') as { data: Prompt[] }

    if (data) prompts = data
  }
  console.log('Prompts:', prompts);

  return (
    <html suppressHydrationWarning lang="en" className='nightwind h-full'>
      <head>
        <PlausibleProvider
          domain="lukacsjpapp.com"
          trackFileDownloads={true}
          taggedEvents={true}
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
