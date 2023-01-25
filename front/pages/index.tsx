
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '../components/Portfolio/Header';
import Hero from '../components/Portfolio/Hero';
import { Login } from '../components/Login';
import About from '../components/Portfolio/About';
import Experience from '../components/Portfolio/Experience';
import Skills from '../components/Portfolio/Skills';
import Projects from '../components/Portfolio/Projects';
import Contact from '../components/Portfolio/Contact';
import { getExpereinces, getTechnologies, getHero, getAbout } from '../services';



export default function Home({ hero, about, experiences, contact, technologies }) {

  const { data: session }: any = useSession();

  useEffect(() => {
    if (session == null) return;
  }, [session]);

  return (
    <div className='snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gary-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#F7AB0A]/20'>
      <Head>
        <title>Lukacs J Papp</title>
      </Head>
      <Header />
      <section id='hero' className='snap-center'>
        {hero.map((hero: any) => {
          return <Hero hero={hero} />
        })}
      </section>
      <section id='about' className='snap-center'>
        {about.map((about: any) => {
          return <About about={about} />
        })}
      </section>
      <section id='experience' className='snap-center'>
        <Experience experiences={experiences} />
      </section>
      {/* <section id='skills' className='snap-start'>
        <Skills technologies={technologies} />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <Contact contact={contact} />
      </section>
      <Link href={'#hero'}>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w10 rounded-full filter grayscale hover:grayscale-0' src={``} alt="sanyi" />
          </div>
        </footer>
      </Link> */}
    </div>
  );
}

export const getStaticProps = async () => {

  const experiences = await getExpereinces();

  const technologies = await getTechnologies();

  const hero = await getHero();

  const about = await getAbout();



  return {
    props: {
      experiences,
      technologies,
      hero,
      about
    }
  }
}
