// Modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type ButtonProps = {
  text:string;
  icon:IconDefinition
}

export default function Button({ text, icon }:ButtonProps) {
  return (
    <div className='flex flex-col text-center text-white gap-2 hover:bg-gray-700 rounded cursor-pointer'>
      <FontAwesomeIcon icon={icon} fontSize={24}/>
      <small>{text}</small>
    </div>
  )
}
