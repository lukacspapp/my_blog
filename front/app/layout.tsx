import '../styles/index.css';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
