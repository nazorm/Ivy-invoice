import React from 'react';
import arrowIcon from '../../../assets/forward-arrow.svg';
import Image from 'next/image';
import { StatusTags } from '@/components/status';
import Link from 'next/link';
interface IInvoiceProps {
    invoice: IInvoicecardProps;
}
export interface IInvoicecardProps {
    id: number,
    invoiceNumber: string;
    date: string;
    billerName: string;
    currency: string;
    totalAmount: string;
    status: string;
    invoiceName: string;
}
export const InvoiceCard = (props: IInvoiceProps) => {
    const { invoice } = props
    const viewInvoiceDetails = () => {

    }
    return (
        <div className='flex justify-around h-20 items-center border-transparent rounded-lg bg-color-text-light shadow-color-text-light/50 dark:bg-grey-border-dark dark:shadow-grey-border-dark/50  shadow-xl mt-5'>
            <p className='font-bold text-sm'>{invoice.invoiceNumber}</p>
            <span className='text-sm text-grey-text-light dark:text-grey-text-dark'>{invoice.date}</span>
            <span className='text-sm text-light-grey dark:text-color-text-light'>{invoice.billerName}</span>
            <p className='font-bold text-lg'>{invoice.currency} {invoice.totalAmount}</p>
            <StatusTags status={invoice.status} />
            <button className='mt-2'>
                <Link 
                // href={`/invoice/${invoice.id}`}
                    // href={{
                    //     pathname: '/invoice/[invoiceId]',
                    //     query: { invoiceId: invoice.id },
                    //   }}
                href={`/invoice/${invoice.invoiceName}?invoiceId=${invoice.id}`}
                > <Image src={arrowIcon} alt='more' /></Link>

            </button>
        </div>
    )
}
