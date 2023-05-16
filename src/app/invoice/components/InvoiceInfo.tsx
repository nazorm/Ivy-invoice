import React from 'react';
import { invoiceData } from '../invoiceData';

export const InvoiceInfo = () => {
    return (
        <section className='bg-color-text-light dark:bg-grey-border-dark mt-5 rounded-lg p-5'>
            <p className='mb-5 text-color-text-black dark:text-color-text-light text-lg font-bold'> {invoiceData.invoiceCode} <br />
                <span className=' text-accent-color-text dark:grey-text-dark text-sm font-medium'>
                    {invoiceData.invoiceName} </span></p>
            <section className='flex md:justify-between flex-col md:flex-row'>
                <div className='sm:flex sm:w-64 sm:justify-between md:block'>
                    <p className='text-base text-accent-color-text dark:text-grey-text-dark'>
                        Invoice Date
                        <br />
                        <span className='text-lg font-bold text-color-text-black dark:text-color-text-light'> {invoiceData.billedDate}</span>
                    </p>
                    <br />
                    <p className='text-base text-accent-color-text dark:text-grey-text-dark'>
                        Payment Due
                        <br />
                        <span className='text-lg font-bold text-color-text-black dark:text-color-text-light'> {invoiceData.dueDate}</span>
                    </p>
                </div>

                &nbsp;
                <p className='text-base text-accent-color-text dark:text-grey-text-dark'>
                    Bill to
                    <br />
                    <span className='text-lg font-bold text-color-text-black dark:text-color-text-light'>{invoiceData.billerName}</span>
                    <br />
                    {/* {invoiceData.billerAddress} */}
                </p>
                <br />
                <p className='text-base text-accent-color-text dark:text-grey-text-dark'>
                    Sent to
                    <br />
                    <span className='text-lg font-bold text-color-text-black dark:text-color-text-light'>{invoiceData.billerEmail}</span>
                </p>
            </section>
        </section>
    )
}
