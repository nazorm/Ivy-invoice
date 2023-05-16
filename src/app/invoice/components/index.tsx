import React from 'react';
import backArrow from '../../../assets/back-arrow.svg'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button';
import { StatusTags } from '@/components/status';
import { InvoiceInfo } from './InvoiceInfo';



export const InvoiceScreen = () => {

    const handleEdit = () => {
        console.log('edit')
    }
    const handleDelete = () => {
        console.log('delete')
    }
    const markAsPaid = () => {
        console.log('paid')
    }
    return (
        <section className='border border-dotted border-red-400 w-full'>
            <section className='w-4/5 mx-auto my-20 border border-dashed border-green-400'>
                <Link href={'/'}>
                    <p className='flex font-bold mb-5'>
                        <Image src={backArrow} alt='back-arrow' className='mr-5' />
                        Go back
                    </p>
                </Link>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center bg-color-text-light dark:bg-grey-border-dark rounded-lg p-5'>
                    <p className='mb-5 md:mb-0'>
                        <span className='mr-4 text-light-grey dark:text-grey-text-dark text-sm font-medium'>
                        Status
                        </span>
                        <StatusTags status='Pending' />
                    </p>
                    <div className='flex items-center md:w-1/3 justify-between'>
                        <Button btnText='Edit' btnType='secondary' primaryAction={handleEdit} />
                        <Button btnText='Delete' btnType='danger' primaryAction={handleDelete} />
                        <Button btnText='Mark as Paid' btnType='primary' primaryAction={markAsPaid} />
                    </div>
                </div>
                <InvoiceInfo/>
            </section>

        </section>
    )
};

