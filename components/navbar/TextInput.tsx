import React from 'react';

export default function TextInput() {
  return (
    <input
      type='text'
      className='px-4 py-3 rounded-lg bg-white text-black hidden md:block focus:outline-none'
      onChange={() => {}}
      autoComplete='off'
      placeholder='¿Qué estás buscando?'
    />
  )
}
