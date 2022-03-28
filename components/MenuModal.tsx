// Modules
import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import { IconButton } from './shared/Button';

// Hooks
import useGeneralContext from '../hooks/useGeneralContext';
import { fadeInDown } from '../utils/animate';

export default function MenuModal() {
  const { state, switchModalMenu } = useGeneralContext();
  if (state.showMenuModal) {
    return (
      <div className={`h-screen fixed top-0 bg-black bg-opacity-50 w-full ${fadeInDown}`} style={{ zIndex:5 }}>
        <div className='fixed top-0 w-full p-10 pb-6 bg-gray-800 flex flex-col text-center gap-4'>
          <h2 className='text-white text-xl font-semibold border-b border-gray-600 pb-3'>Menú</h2>
          <ul className='flex flex-col text-white'>
            {options.map((option, key) => (
              <li className='hover:bg-gray-700 py-3 rounded cursor-pointer' key={key}>{option.text}</li>
            ))}
          </ul>
          <IconButton icon={faTimes} className='self-center' onClick={switchModalMenu}/>
        </div>
      </div>
    )
  } else return <></>
}

const options = [
  { text: 'Inicio' },
  { text: 'Eventos' },
  { text: 'Registro' },
  { text: 'Historial' },
  { text: 'Noticias' },
  { text: 'Contacto' },
  { text: '¿Quiénes somos?' },
  { text: '¿Necesitas ayuda?' },

]