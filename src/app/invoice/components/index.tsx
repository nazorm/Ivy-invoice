import React, { useState } from 'react';
import backArrow from '../../../assets/back-arrow.svg'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { StatusTags } from '@/components/status';
import { InvoiceInfo } from './InvoiceInfo';
import { ItemList } from './ItemList';
import { invoiceData } from '../invoiceData';
import Drawer from '@/components/Drawer';
import { AddEditInvoiceForm } from './AddEditInvoice';



export const InvoiceScreen = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleEdit = () => {
        setIsDrawerOpen(true)
    }
    const handleDelete = () => {
        console.log('delete')
    }
    const markAsPaid = () => {
        console.log('paid')
    }
    return (
        <section className='w-full'>

            <section className='w-full md:w-4/5  md:mx-auto  my-20 border border-dashed border-green-400'>
                <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
                  <AddEditInvoiceForm isEditing={true}/>
                </Drawer>
                <Link href={'/'}>
                    <p className='flex font-bold mb-5 px-5'>
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
                        <Button
                            data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"
                            btnText='Edit' btnType='secondary' primaryAction={handleEdit} />
                        <Button btnText='Delete' btnType='danger' primaryAction={handleDelete} />
                        <Button btnText='Mark as Paid' btnType='primary' primaryAction={markAsPaid} />
                    </div>
                </div>
                <InvoiceInfo />
                {/* <ItemList itemsList={invoiceData.items} /> */}
            </section>

        </section>
    )
};

