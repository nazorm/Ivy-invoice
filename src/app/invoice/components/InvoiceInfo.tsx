import React from 'react';
import { ItemList } from './ItemList';
import { IInvoiceProps } from '../types';
import { formatDate, addLineBreaks } from '../../../../utils/formatters';

interface Props {
    invoiceData: IInvoiceProps
}
export const InvoiceInfo = ({ invoiceData }: Props) => {
    const totalPrice = invoiceData?.items?.reduce((a, b) => a + +b.totalItemPrice, 0)
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
                        <span className='text-lg font-bold text-color-text-black dark:text-color-text-light'> {formatDate(invoiceData.billedDate)}</span>
                    </p>
                    <br />
                    <p className='text-base text-accent-color-text dark:text-grey-text-dark'>
                        Payment Due
                        <br />
                        <span className='text-lg font-bold text-color-text-black dark:text-color-text-light'> {formatDate(invoiceData.dueDate)}</span>
                    </p>
                </div>

                &nbsp;
                <p className='text-base text-accent-color-text dark:text-grey-text-dark'>
                    Bill to
                    <br />
                    <span className='text-lg font-bold text-color-text-black dark:text-color-text-light'>{invoiceData.billerName}</span>
                    <br />
                    {invoiceData.billerAddress}
                </p>
                <br />
                <p className='text-base text-accent-color-text dark:text-grey-text-dark'>
                    Sent to
                    <br />
                    <span className='text-lg font-bold text-color-text-black dark:text-color-text-light'>{invoiceData.billerEmail}</span>
                </p>
            </section>
            <div className='w-full my-10 bg-default-light-color dark:bg-grey-blue p-5 rounded-lg'>
                <div className='md:m-10'>
                    <ItemList itemsList={invoiceData.items} isCurrencyShown={true} />
                </div>

                <div className='flex w-full justify-between items-center md:pl-10 md:pr-16 h-20 mt-10 px-5 bg-regal-blue dark:bg-color-text-black rounded-lg'>
                    <p className='text-color-text-light font-light text-sm'>Amount Due</p>
                    <p className='text-color-text-light font-bold text-xl'>£ {totalPrice}</p>
                </div>
            </div>

        </section>
    )
};
