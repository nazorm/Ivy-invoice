import React from 'react';
import arrowIcon from '../../../assets/forward-arrow.svg';
import Image from 'next/image';
import { StatusTags } from '@/components/status';
interface IInvoiceProps {
    invoice: IInvoicecardProps;
}
export interface IInvoicecardProps {
    invoiceNumber: string;
    date: string;
    name: string;
    currency: string;
    totalAmount: string;
    status: string;
}
export const InvoiceCard = (props: IInvoiceProps) => {
    const { invoice } = props
    return (
        <div className='flex justify-around h-20 items-center border-transparent rounded-lg bg-color-text-light shadow-color-text-light/50 dark:bg-grey-border-dark dark:shadow-grey-border-dark/50  shadow-xl mt-5'>
            <p className='font-bold text-sm'>{invoice.invoiceNumber}</p>
            <span className='text-sm text-grey-text-light dark:text-grey-text-dark'>{invoice.date}</span>
            <span className='text-sm text-light-grey dark:text-color-text-light'>{invoice.name}</span>
            <p className='font-bold text-lg'>{invoice.currency} {invoice.totalAmount}</p>
            <StatusTags status={invoice.status} />
            <button className='mt-2'>
                <Image src={arrowIcon} alt='more' />
            </button>
        </div>
    )
}
