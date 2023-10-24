"use client"; // this is a client component 👈🏽
import React, { ChangeEvent, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { IInvoicecardProps, InvoiceCard } from './components/InvoiceCard';
import { invoiceData } from './invoiceCardData';
import { EmptyInvoiceList } from './components/EmptyInvoiceList';
import { ToastContainer } from 'react-toastify';

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

const sortedInvoices = invoiceList?.slice().sort(function (a, b) {
    return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
  });

    return (
        <main className='border border-dotted border-red-400 w-full '>
                  <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            <section className='w-4/5 mx-auto my-20'>
                <Header handleSelectedFilter={handleSelectedFilter} noOfInvoice={sortedInvoices.length} />
                {loading && <p>Loading...</p>}
                <section className='mt-20'>
                    {sortedInvoices.length > 0 ?
                        sortedInvoices.map((data) => {
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