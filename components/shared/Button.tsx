// Modules
import React, { ReactNode } from 'react';

// Hooks
import useGetColor, { Colors } from '../../hooks/useGetColor';

type Props = {
  children: ReactNode;
  color: Colors;
  onClick: () => void;
  type: 'button' | 'submit'
}

export default function Button({ children, color, onClick, type }:Props) {
  const currentColor = useGetColor(color);
  return (
    <button 
      className={`${currentColor} rounded-2xl px-4 py-2 text-white transition`}
      onClick={onClick}
      type={type}
    >{children}</button>
  )
}
