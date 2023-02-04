import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Spotify from './Spotify';

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'>

        {/* Social icons */}
        <SocialIcon
        // hover effect smooth in css change color to highlight on hover
          className='rounded-full hover:scale-125 transform transition duration-300 ease-in-out hover:translate-y-1'
          url='https://github.com/lukacspapp'
          bgColor='transparent'
          fgColor='gray'
        />
        <SocialIcon
          className='rounded-full hover:scale-125 transform transition duration-300 ease-in-out hover:translate-y-1'
          url='https://www.linkedin.com/in/lukacsjpapp/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          className='rounded-full hover:scale-125 transform transition duration-300 ease-in-out hover:translate-y-1'
          url='mailto:papplukacs@hotmail.com'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>

      </motion.div>
    </header>
  )
}