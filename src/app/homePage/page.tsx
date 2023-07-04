"use client"; // this is a client component 👈🏽
import React, { ChangeEvent, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { IInvoicecardProps, InvoiceCard } from './components/InvoiceCard';
import { invoiceData } from './invoiceCardData';
import { EmptyInvoiceList } from './components/EmptyInvoiceList';


const HomePage = () => {
    const [invoiceList, setiInvoiceList] = useState<IInvoicecardProps[] | []>([]);
    const [loading, setLoading] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('')
    const handleSelectedFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(event.target.value);
    }
    const newDate = new Date();

const getInvoices = async ()=>{
    setLoading(true)
  const response = await fetch('https://invoice-api-8h1u.onrender.com/invoices/');
  const invoicesData = await response.json();
  setiInvoiceList(invoicesData);
  setLoading(false);
}

useEffect(()=>{
    getInvoices();
},[])

    return (
        <main className='border border-dotted border-red-400 w-full '>
            <section className='w-4/5 mx-auto my-20'>
                <Header handleSelectedFilter={handleSelectedFilter} noOfInvoice={invoiceList.length} />
                {loading && <p>Loading...</p>}
                <section className='mt-20'>
                    {invoiceList.length > 0 ?
                        invoiceList.map((data) => {
                            return (
                                <InvoiceCard
                                    key={data._id}
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