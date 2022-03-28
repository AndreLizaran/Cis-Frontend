// Modules
import React from 'react';
import Timer from './newEvent/Timer';

// Components
import { DarkButton } from './shared/Button';

export default function NextEvent() {
  return (
    <div className='flex flex-col p-10 gap-6'>
      <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-4'>
        <h2
          className='text-gray-800 font-bold uppercase underline'
          style={{ fontSize:30 }}
        >Próximo evento</h2>
        <h2 className='bg-gray-800 p-2 px-4 text-white rounded' style={{ fontSize:24 }}>15 Enero</h2>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 items-center'>
        <div className='w-full lg:w-6/12 flex flex-col items-center justify-center gap-3'>
          <Timer/>
          <p className='text-gray-800 font-semibold text-2xl text-center w-10/12 pb-4'>Conoce mas acerca del camino hacia al exito de Oliver Barrera egresado del Tecnologico de Veracruz</p>
          <DarkButton onClick={() => {}}>Sáber más</DarkButton>
        </div>
        <div className='w-full sm:w-10/12 md:w-8/12 lg:w-6/12 flex flex-col'>
          <img className='w-full' src='./img/nextEvent.png'/>
        </div>
      </div>
    </div>
  )
}
