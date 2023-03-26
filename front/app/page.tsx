
import Head from 'next/head';
import About from '../components/Portfolio/About';
import Contact from '../components/Portfolio/Contact';
import Experience from '../components/Portfolio/Experience';
import Header from '../components/Portfolio/Header';
import Hero from '../components/Portfolio/Hero';
import { Nav } from '../components/Portfolio/Nav';
import Projects from '../components/Portfolio/Projects';
import Skills from '../components/Portfolio/Skills';
import { getAbout, getExpereinces, getHero, getTechnologies } from '../services';




export default async function Home() {

  const experiences = await getExpereinces();

  const technologies = await getTechnologies();

  const hero = await getHero();

  const about = await getAbout();
;

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

