import React from 'react'

export default function Timer() {
  return (
    <div className='flex justify-between items-center' >
      <TimerElement timerNumber={1} text='Días'/>
      <Separator/>
      <TimerElement timerNumber={11} text='Horas'/>
      <Separator/>
      <TimerElement timerNumber={12} text='Minutos'/>
      <Separator/>
      <TimerElement timerNumber={59} text='Segundos'/>
    </div>
  )
}

type Props = {
  text:string;
  timerNumber:number;  
}

function TimerElement ({ text, timerNumber }:Props) {
  return (
    <div className='flex flex-col text-gray-800 p-4 text-center'>
      <span className='font-bold' style={{ fontSize:30 }}>{timerNumber}</span>
      <small>{text}</small>
    </div>
  )
}

function Separator () {
  return <span className='text-2xl text-gray-800 font-bold' style={{ fontSize:36 }}>-</span>
}