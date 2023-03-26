"use client"

import { MapPinIcon } from '@heroicons/react/24/solid'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

type Props = {
  about: any
}

export default function Contact({ about }: Props) {

  const userId = process.env.EMAILJS_SERVICEID ?? ''
  const templateId = process.env.EMAIL_JS_TEMPLATE_ID ?? ''
  const key = process.env.EMAIL_JS_KEY ?? ''

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (form.current) {
        emailjs.sendForm(
          userId,
          templateId,
          form.current,
          key
        ).then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
    }

  }

  return (
    <div className='h-screen relative flex flex-col text-center
    md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase text-2xl tracking-[20px]'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-yellow-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{about.location}</p>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit} className='flex flex-col space-y-2 w-80 mx-auto'>
          <input placeholder='Name' className='contactInput' name='name' type="text" />
          <input className='contactInput' placeholder='Email' name='email' type='email' />
          <textarea className='contactInput' typeof='text' placeholder='message' name='message'></textarea>
          <button type='submit' className='bg-[#F7AB0A] disabled py-5 px-10 rounded-md text-black font-bold text-lg' >Submit</button>
        </form>
      </div>
    </div>
  )
}