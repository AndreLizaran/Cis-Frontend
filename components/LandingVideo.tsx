// Modules
import React from 'react';

// Components
import Button from './shared/Button';

export default function LandingVideo() {
  return (
    <div className='flex p-10 bg-slate-400 align-center'>
      <img 
        className='rounded drop-shadow-2xl w-6/12'   
        src='./img/landingVideo.png'
        style={{ zIndex:2 }}
      />
      <div className='w-full bg-white p-6 self-center justify-center items-center rounded flex flex-col text-center' style={{ zIndex:1, height:320 }}>
        <h2 
          className='text-gray-800 font-bold w-full uppercase'
          style={{ fontSize:38 }}
        >¡Bienvenido a la comunidad!</h2>
        <h3 
          className='text-gray-800 mb-3'
          style={{ fontSize:20 }}
        >Una comunidad de estudiantes para estudiantes</h3>
        <Button 
          type='button' 
          onClick={() => {}}
          color='dark-blue'
        >Descubre</Button>
      </div>
    </div>
  )
}
