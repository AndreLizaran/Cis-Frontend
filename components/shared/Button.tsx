// Modules
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const button = 'rounded-2xl px-4 py-2 text-white transition';

export function DarkButton ({ children, className, onClick }:Props) {
  return (
    <button 
      className={`${className} ${button} bg-gray-800 hover:bg-gray-700`}
      onClick={onClick}
    >{children}</button>
  )
}

export function BlueButton ({ children, className, onClick }:Props) {
  return (
    <button 
      className={`${className} ${button} bg-blue-600 hover:bg-blue-500`}
      onClick={onClick}
    >{children}</button>
  )
}

type IconButtonProps = {
  icon: IconDefinition;
  onClick?: () => void;
  className?: string;
}

export function IconButton ({ icon, onClick = () => {}, className}:IconButtonProps) {
  return (
    <button className={`p-2 cursor-pointer ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className='text-white' fontSize={20}/>
    </button>
  )
}