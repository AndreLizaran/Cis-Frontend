import React from 'react';

export default function TextInput() {
  return (
    <input
      type='text'
      className='px-4 py-2 rounded-lg bg-white text-black hidden md:block col-start-3 md:col-end-9 lg:col-end-10 focus:outline-none'
      onChange={() => {}}
      autoComplete='off'
      placeholder='¿Qué estás buscando?'
    />
  )
}
