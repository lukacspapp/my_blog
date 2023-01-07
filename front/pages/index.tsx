
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
import { graphql, server } from '../config';
import { fetcher } from '../lib/api';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export default function Home({ heroData: hero, about, experiences, contact, technologies }) {



  // const { url } = contact.attributes.profile.data.attributes;

  const { data: session }: any = useSession();

  useEffect(() => {
    if (session == null) return;
  }, [session]);

  return <h1>sanyi</h1>

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
            <img className='h-10 w10 rounded-full filter grayscale hover:grayscale-0' src={`http://localhost:1337${url}`} alt="sanyi" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getServerSideProps = async () => {

//   const client = new ApolloClient({
//     uri: 'https://strapi-test-9vev.onrender.com/graphql',
//     credentials: 'include',
//     cache: new InMemoryCache()

//   })

//   const { data } = await client.query({
//     query: gql`
//     query {
//   products {
//     data{
//       id
//     }
//   }
// }
//     `
//   })


  // const { data } = await client.query({
  //   query: gql`
  //   query{
  //     pExperiences{
  //       data{
  //         id,
  //         attributes{
  //           job_title,
  //           start_date,
  //           end_date,
  //           company_title,
  //           summary_points,
  //           image{
  //             data{
  //               id,
  //               attributes{
  //                 url
  //               }
  //             }
  //           }
  //           technologies{
  //             data{
  //               id,
  //               attributes{
  //                 name,
  //                 image{
  //                   data{
  //                     id,
  //                     attributes{
  //                       url
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`,
  // })

  // const { data: contact } = await client.query({
  //   query: gql`
  //   query {
  //     contact{
  //       data{
  //         id
  //         attributes{
  //           email,
  //           location,
  //           profile{
  //             data{
  //               id,
  //               attributes{
  //                 url
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`
  // })

  // const { data: technologies } = await client.query({
  //   query: gql`
  //   query {
  //   technologies{
  //     data{
  //       id,
  //       attributes{
  //         image{
  //           data{
  //             id,
  //             attributes{
  //               url
  //             }
  //           }
  //         },
  //         name
  //       }
  //     }
  //   }}`
  // })

  // const heroData = await fetcher(`${server}/portfolio-hero?populate=*`)

  // const aboutData = await fetcher(`${server}/p-about?populate=*`)

  return {
    props: {
      // valami: data.products.data,
      // heroData: heroData.data,
      // about: aboutData.data,
      // experiences: data.pExperiences.data,
      // contact: contact.contact.data,
      // technologies: technologies.technologies.data
    }
  }
}