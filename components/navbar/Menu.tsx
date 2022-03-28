import React from 'react'

export default function Menu() {
  return (
    <ul className='hidden md:flex justify-around mt-5 text-center'>
      {menuItems.map((item, key) => (
        <li className='text-white py-2 w-full hover:bg-gray-700 rounded cursor-pointer' key={key}>{item.text}</li>
      ))}
    </ul>
  )
}

const menuItems = [
  { text: 'Inicio' },
  { text: 'Eventos' },
  { text: 'Registro' },
  { text: 'Historial' },
  { text: 'Noticias' },
  { text: 'Contacto' },
]
