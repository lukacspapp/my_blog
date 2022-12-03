
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { Login } from '../components/Login';
import About from '../components/About';

export default function Home() {
  const { data: session }: any = useSession();

  useEffect(() => {
    if (session == null) return;
    console.log('session.jwt', session.jwt);
  }, [session]);

  return (
    <div className='snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Lukacs J Papp</title>
      </Head>
      <Header />
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
    </div>
  );
}