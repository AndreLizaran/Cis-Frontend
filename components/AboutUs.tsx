import React from 'react'
import { BlueButton } from './shared/Button';

export default function AboutUs() {
  return (
    <div className='p-10 bg-gray-800 flex flex-col gap-3'>
      <h2 
        className='text-white uppercase font-semibold'
        style={{ fontSize:30 }}
      >Acerca de nosotros</h2>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-center'>
        <img src='./img/aboutUs.png' className='w-full sm:w-10/12 lg:w-6/12'/>
        <div className='flex flex-col text-white text-justify gap-6'>
          <p>{dummyP}</p>
          <p>{dummyP2}</p>
          <BlueButton onClick={() => {}} className='self-center'>Conocer más</BlueButton>
        </div>
      </div>
    </div>
  )
}

const dummyP = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.';
const dummyP2 = 'Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.';