// Modules
import React from 'react';
import Timer from './newEvent/Timer';

// Components
import Button from './shared/Button';

export default function NextEvent() {
  return (
    <div className='flex flex-col p-10 py-4 gap-6'>
      <div className='flex justify-between items-center'>
        <h2
          className='text-gray-800 font-bold uppercase underline'
          style={{ fontSize:30 }}
        >Próximo evento</h2>
        <h2 className='bg-gray-800 p-2 px-4 text-white rounded' style={{ fontSize:30 }}>15 Enero</h2>
      </div>
      <div className='flex gap-6'>
        <div className='w-6/12 flex flex-col items-center justify-center gap-3'>
          <Timer/>
          <p className='text-gray-800 font-semibold text-2xl text-center w-10/12 pb-4'>Conoce mas acerca del camino hacia al exito de Oliver Barrera egresado del Tecnologico de Veracruz</p>
          <Button type='button' color='dark-blue' onClick={() => {}}>Sáber más</Button>
        </div>
        <div className='w-6/12 flex flex-col'>
          <img className='w-full' src='./img/nextEvent.png'/>
        </div>
      </div>
    </div>
  )
}
