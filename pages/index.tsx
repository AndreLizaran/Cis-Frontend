import React from 'react';

// Components
import LandingVideo from '../components/LandingVideo'
import Navbar from '../components/Navbar'
import NextEvent from '../components/NextEvent';

export default function index() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <div style={{ height:140 }}/>
      <LandingVideo/>
      <NextEvent/>
    </div>
  )
}
