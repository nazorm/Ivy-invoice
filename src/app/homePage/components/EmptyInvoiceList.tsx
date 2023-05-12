import React from 'react';
import emptyInvoiceImage from '../../../assets/empty-invoice.png';
import Image from 'next/image';


export const EmptyInvoiceList = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center'> 
            <Image src={emptyInvoiceImage} alt='empty'/>
            </div>
           
            <h1 className='font-bold text-xl leading-5 my-5'>There is nothing here</h1>
            <p className='text-grey-text-light dark:text-grey-text-dark'>  Create an invoice by clicking the <br/>
                <strong>New Invoice</strong> button and get started</p>
        </div>
    )
}