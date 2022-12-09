
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Portfolio/Hero';
import { Login } from '../components/Login';
import About from '../components/Portfolio/About';
import Experience from '../components/Portfolio/Experience';
import Skills from '../components/Portfolio/Skills';
import Projects from '../components/Portfolio/Projects';
import Contact from '../components/Portfolio/Contact';
import { graphql, server } from '../config';
import { fetcher } from '../lib/api';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export default function Home({ heroData: hero, about, experiences, contact }) {

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
        <Hero hero={hero} />
      </section>
      <section id='about' className='snap-center'>
        <About about={about} />
      </section>
      <section id='experience' className='snap-center'>
        <Experience experiences={experiences} />
      </section>
      <section id='skills' className='snap-start'>
        <Skills />
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
            <img className='h-10 w10 rounded-full filter grayscale hover:grayscale-0' src="https://lh3.googleusercontent.com/a/AEdFTp4XI19YIlxUxbuARimfx5M-8gNTIeLPGq8nBhokVw=s192-c-rg-br100" alt="sanyi" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps = async () => {

  const client = new ApolloClient({
    uri: graphql,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
    query{
      pExperiences{
        data{
          id,
          attributes{
            job_title,
            start_date,
            end_date,
            company_title,
            summary_points,
            image{
              data{
                id,
                attributes{
                  url
                }
              }
            }
            technologies{
              data{
                id,
                attributes{
                  name,
                  image{
                    data{
                      id,
                      attributes{
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,

  })

  const heroData = await fetcher(`${server}/portfolio-hero?populate=*`)

  const aboutData = await fetcher(`${server}/p-about?populate=*`)

  const contactData = await fetcher(`${server}/contact`)


  return {
    props: {
      heroData: heroData.data,
      about: aboutData.data,
      experiences: data.pExperiences.data,
      contact: contactData.data
    }
  }
}