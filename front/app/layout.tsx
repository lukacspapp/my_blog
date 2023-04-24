import "tailwindcss/tailwind.css";
import { Providers } from './providers';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en" className='nightwind h-full'>
      <head />
      <body className="bg-gray-50 selection:bg-teal-300 selection:text-gray-700 dark:bg-gray-900 dark:selection:bg-rose-600 dark:selection:text-rose-50">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
