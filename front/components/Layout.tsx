import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import { Nav } from './Nav'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
  <div>
    <Head>
      <title>LJP</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <main>
    {children}
    </main>
    <Footer />
  </div>
  )
}


export default Layout
