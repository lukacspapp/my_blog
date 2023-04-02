import "tailwindcss/tailwind.css";
import Gradient from "../components/Gradient";
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
        <Gradient />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
