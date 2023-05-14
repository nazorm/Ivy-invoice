import React from 'react';
import backArrow from '../../../assets/back-arrow.svg'
import Image from 'next/image';
import Link from 'next/link';



export const InvoiceScreen = () => {
    return (
        <section className='border border-dotted border-red-400 w-full'>
            <section className='w-4/5 mx-auto my-20 border border-dashed border-green-400'>
                <Link href={'/'}>
                    <p className='flex font-bold'>
                        <Image src={backArrow} alt='back-arrow' className='mr-5' />
                        Go back
                    </p>
                </Link>
                <div>
                    <p>Status <span>Pending</span></p>
                </div>
            </section>

        </section>
    )
}

