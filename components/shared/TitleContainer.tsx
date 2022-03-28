// Modules
import Head from 'next/head';
import React, { ReactNode } from 'react';

// Components
import MenuModal from '../MenuModal';

type Props = {
  title:string;
  children: ReactNode
}

export default function TitleContainer({ title, children }:Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex flex-col'>
        {children}
      </div>
      <MenuModal/>
    </>
  )
}
