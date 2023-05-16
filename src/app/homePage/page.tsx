"use client"; // this is a client component 👈🏽
import React, { ChangeEvent, useState } from 'react';
import { Header } from './components/Header';
import { IInvoicecardProps, InvoiceCard } from './components/InvoiceCard';
import { invoiceData } from './invoiceCardData';
import { EmptyInvoiceList } from './components/EmptyInvoiceList';


const HomePage = () => {
    //invoiceData
    const [invoicList, setiInvoiceList] = useState<IInvoicecardProps[] | []>(invoiceData);
    const [selectedFilter, setSelectedFilter] = useState('')
    const handleSelectedFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(event.target.value);
    }
    const newDate = new Date();
    return (
        <main className='border border-dotted border-red-400 w-full '>
            <section className='w-4/5 mx-auto my-20'>
                <Header handleSelectedFilter={handleSelectedFilter} />
                <section className='mt-20'>
                    {invoicList.length > 0 ?
                        invoicList.map((data) => {
                            return (
                                <InvoiceCard
                                    key={data.invoiceNumber}
                                    invoice={data}
                                />
                            )
                        })
                        :
                        <EmptyInvoiceList />
                    }
                </section>
            </section>
        </main>
    )
}

export default HomePage;