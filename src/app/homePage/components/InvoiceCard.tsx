import React from 'react';
import arrowIcon from '../../../assets/forward-arrow.svg';
import Image from 'next/image';
import { StatusTags } from '@/components/status';
import Link from 'next/link';
import { formatDate } from '../../../../utils/formatters';
interface IInvoiceProps {
    invoice: IInvoicecardProps;
}
export interface IInvoicecardProps {
    _id: number,
    status: string,
    invoiceCode: string,
    invoiceName: string;
    billerName: string;
    billerEmail: string;
    billerAddress: string;
    billedDate: string;
    dueDate: Date;
    totalAmountCurrency: string,
    totalAmount: string,
    items: IItems[],
    createdAt: Date;
}
interface IItems {
    itemName: string,
    qty: number,
    unitPrice: number,
    itemCurrency: string,
    totalItemPrice: number,
}
export const InvoiceCard = (props: IInvoiceProps) => {
    const { invoice } = props



    return (
        <div>
            <Link
                href={`/invoice/${invoice._id}`}
                className='flex flex-col sm:flex-row-reverse justify-around md:justify-between space-x-3 px-7  h-52 sm:h-20 w-full items-center border-transparent rounded-lg bg-color-text-light shadow-color-text-light/50 dark:bg-grey-border-dark dark:shadow-grey-border-dark/50 shadow-xl mt-5'
            >

                <div className='flex space-x-3 justify-between w-full sm:w-80'>
                    <StatusTags status={invoice.status} />
                    <button className='mt-2'>
                        <Link
                            href={`/invoice/${invoice._id}`}
                        > <Image src={arrowIcon} alt='more' /></Link>

                    </button>
                </div>

                <div className='flex items-center space-x-6  w-full justify-between sm:justify-around'>
                    <span className='text-sm text-light-grey dark:text-color-text-light'>{invoice.billerName}</span>
                    <p className='font-bold text-lg'>{invoice.totalAmountCurrency} {invoice.totalAmount}</p>
                </div>
                <div className='flex items-center space-x-6 w-full justify-between sm:justify-around'>
                    <p className='font-bold text-sm'>{invoice.invoiceCode}</p>
                    <span className='text-sm text-grey-text-light dark:text-grey-text-dark'>{formatDate(invoice.dueDate)}</span>
                </div>
            </Link>
        </div>
    )
}
