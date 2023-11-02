import React from 'react';
import Image from 'next/image';
import logo from '../../../assets/logo.svg';


export const Sidebar = () => {
    return (
        <div className='h-screen w-20 bg-grey-blue rounded-2xl'>
            <Image
                src={logo}
                height={150}
                width={150}
                alt='logo'
                priority
            />
        </div>
    )
}