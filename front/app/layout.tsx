import "tailwindcss/tailwind.css";
import { getBio } from "../lib/services";
import '../styles/global.css';
import { Providers } from './providers';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { email } = await getBio()

  return (
    <html suppressHydrationWarning lang="en" className='nightwind h-full'>
      <head />
      <body className="bg-gray-50 selection:bg-teal-300 selection:text-gray-900 dark:bg-gray-900 dark:selection:bg-rose-600 dark:selection:text-rose-50">
        <Providers email={email}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
