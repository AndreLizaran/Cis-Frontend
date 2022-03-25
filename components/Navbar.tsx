// Modules
import React from 'react'
import { faCircleQuestion, faComments } from '@fortawesome/free-solid-svg-icons';

// Components
import TextInput from './navbar/TextInput';

// Types
import Button, { ButtonProps } from './navbar/Button';
import Menu from './navbar/Menu';

export default function Navbar() {
  return (
    <div className='flex flex-col bg-gray-800 px-6 py-4 fixed top-0 w-full' style={{ zIndex:3 }}>
      <div className='grid grid-cols-12 gap-6'>
        <img 
          style={{ height:50 }} 
          src='./img/cis-logo.png'
          className='col-start-1 col-end-3'
        />
        <TextInput/>
        <ButtonsContainer/>
      </div>
      <Menu/>
    </div>
  )
}

function ButtonsContainer () {
  return (
    <div className='flex gap-6 md:col-start-9 lg:col-start-10 col-end-13 justify-center'>
      {buttonsInformation.map((info, key) => (
        <Button icon={info.icon} text={info.text} key={key}/>
      ))}
    </div>
  )
}

const buttonsInformation:ButtonProps[] = [
  {
    text:'¿Quiénes somos?',
    icon: faCircleQuestion,
  },
  {
    text:'¿Necesitas ayuda?',
    icon: faComments,
  }, 
]

