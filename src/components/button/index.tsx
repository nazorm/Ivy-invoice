import Image from 'next/image';
import React from 'react';

interface Props {
    // color: string;
}

export const PrimaryButton = (props: Props) => {
    // const {color} = props;
    return (
        <button className=' flex bg-accent-color hover:bg-accent-color-hover rounded-3xl py-3 px-4 font-bold text-color-text-light'>
            <p className='mr-3 w-6 h-6 rounded-full bg-color-text-light text-accent-color font-bold'>
                +
            </p>
            New Invoice
        </button>
    )
}