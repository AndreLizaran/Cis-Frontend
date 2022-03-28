// Modules
import React from 'react';

// Components
import { DarkButton } from './shared/Button';

export default function LandingVideo() {
  return (
    <div className='flex flex-col lg:flex-row p-10 bg-slate-400'>
      <img 
        className='rounded-t lg:rounded-l lg:rounded-t-none drop-shadow-2xl w-full lg:w-6/12'   
        src='./img/landingVideo.png'
      />
      <div className='w-full lg:w-6/12 bg-white p-6 justify-center items-center rounded-b lg:rounded-r lg:rounded-l-none flex flex-col text-center drop-shadow-2xl'>
        <h2 
          className='text-gray-800 font-bold w-full uppercase'
          style={{ fontSize:38 }}
        >¡Bienvenido a la comunidad!</h2>
        <h3 
          className='text-gray-800 mb-3'
          style={{ fontSize:20 }}
        >Una comunidad de estudiantes para estudiantes</h3>
        <DarkButton 
          onClick={() => {}}
        >Descubre</DarkButton>
      </div>
    </div>
  )
}
