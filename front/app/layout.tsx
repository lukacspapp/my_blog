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
      <body className="body">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
