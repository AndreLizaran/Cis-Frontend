// Modules
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleQuestion, faComments } from '@fortawesome/free-solid-svg-icons';

// Components
import Menu from './navbar/Menu';
import TextInput from './navbar/TextInput';
import Button, { ButtonProps } from './navbar/Button';
import { IconButton } from './shared/Button';
import useGeneralContext from '../hooks/useGeneralContext';

export default function Navbar() {
  const { switchModalMenu } = useGeneralContext();
  return (
    <>
      <div className='flex flex-col bg-gray-800 px-10 py-4 w-full' style={{ zIndex:2 }}>
        <div className='flex justify-between items-center'>
          <img 
            style={{ height:50 }} 
            src='./img/cis-logo.png'
            className=''
          />
          {/* <TextInput/> */}
          {/* <ButtonsContainer/> */}
          <IconButton icon={faBars} onClick={switchModalMenu}/>
        </div>
        {/* <Menu/> */}
      </div>
    </>
  )
}

function ButtonsContainer () {
  return (
    <div className='hidden md:flex gap-3 md:col-start-10 col-end-13 justify-center'>
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

