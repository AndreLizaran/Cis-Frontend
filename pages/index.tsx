// Modules
import React from 'react';
import AboutUs from '../components/AboutUs';

// Components
import Navbar from '../components/Navbar';
import NextEvent from '../components/NextEvent';
import LandingVideo from '../components/LandingVideo'
import TitleContainer from '../components/shared/TitleContainer';

export default function index() {
  return (
    <>
      <TitleContainer title='Bienvenido a la comunidad'>
        <Navbar/>
        <LandingVideo/>
        <NextEvent/>
        <AboutUs/>
      </TitleContainer>
    </>
  )
}
