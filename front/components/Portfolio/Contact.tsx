import React, { useRef, useState } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import emailjs from 'emailjs-com'

type Props = {
  contact: any
}

export default function Contact({ contact }: Props) {

  const { email, location } = contact.attributes


  const userId = 'service_k28ayav'
  const templateId = 'template_m60bxwh'
  const key = '5tIJVW2z2YUdH9bHg'

  const form = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();

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
            <p className='text-2xl'>{location}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-yellow-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{email}</p>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input placeholder='Name' className='contactInput' name='name' type="text" />
            <input placeholder='Email' className='contactInput' name='email' type="email" />
          </div>
          <input className='contactInput' placeholder='Subject' name='subject' type='text' />
          <textarea className='contactInput' typeof='text' name='message'></textarea>
          <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg' >Submit</button>
        </form>
      </div>
    </div>
  )
}