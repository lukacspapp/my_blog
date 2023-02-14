
import { signOut, useSession, signIn } from 'next-auth/react';
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
import Image from 'next/image';
import { Nav } from '../components/Portfolio/Nav';
import { Element } from 'react-scroll';




export default function Home({ hero, about, experiences, technologies }) {

  const { data: session, status }: any = useSession();

  console.log(session, status)

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
          return <Hero key={hero.id} hero={hero} />
        })}
      </section>
      <section id='about' className='snap-center'>
        {about.map((about: any) => {
          return <About key={about.id} about={about} />
        })}
      </section>
      <section id='experience' className='snap-center'>
        <Experience experiences={experiences} />
      </section>
      <section id='skills' className='snap-start'>
        <Skills technologies={technologies} />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        {about.map((about: any) => {
          return <Contact key={about.id} about={about} />
        })}
      </section>
      <Nav />
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
