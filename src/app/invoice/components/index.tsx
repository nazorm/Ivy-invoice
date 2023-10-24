"use client"; // this is a client component 👈🏽
import React, { useEffect, useState } from 'react';
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
import { IInvoiceProps } from '../types';
import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const InvoiceScreen = (invoiceId: any) => {
    const router = useRouter()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    //IInvoiceProps
    const [invoiceInformation, setInvoiceInformation] = useState<any>();

    const getSingleInvoice = async () => {
        setLoading(true)
        const response = await fetch(`https://invoice-api-8h1u.onrender.com/invoices/single/${invoiceId.invoiceId}`);
        const invoiceData = await response.json();
        setInvoiceInformation(invoiceData);
        setLoading(false);
    }
    console.log(invoiceInformation)
    useEffect(() => {
        getSingleInvoice();
    }, [])



    const handleEdit = () => {
        setIsDrawerOpen(true)
    }
    const handleDelete = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://invoice-api-8h1u.onrender.com/invoices/delete/${invoiceId.invoiceId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            toast.success("Delete Successful")
        } catch (error) {
            console.error("Error:", error);
        }
        setLoading(false)
        setIsModalOpen(false)
        router.push('/')
    }
    const markAsPaid = async () => {
        try {
            const response = await fetch(`https://invoice-api-8h1u.onrender.com/invoices/update/${invoiceId.invoiceId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status: 'Paid'
                }),
            });
            const result = await response.json();
            toast.success("Status Update Successful")
        } catch (error) {
            console.error("Error:", error);
        }
        router.push('/')
    }
    return (
        <section className='w-full'>
      
            <section className='w-full md:w-4/5  md:mx-auto  my-20'>
                {!!invoiceInformation && (<Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
                    <AddEditInvoiceForm isEditing={true} invoiceInformation={invoiceInformation} setLoading={setLoading} />
                </Drawer>)}

                <Link href={'/'}>
                    <p className='flex font-bold mb-5 px-5'>
                        <Image src={backArrow} alt='back-arrow' className='mr-5' width="0"
                            height="0" />
                        Go back
                    </p>
                </Link>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center bg-color-text-light dark:bg-grey-border-dark rounded-lg p-5'>
                    <p className='mb-5 md:mb-0'>
                        <span className='mr-4 text-light-grey dark:text-grey-text-dark text-sm font-medium'>
                            Status
                        </span>
                        <StatusTags status={invoiceInformation ? invoiceInformation.status : ''} />
                    </p>
                    <div className='flex items-center md:w-1/3 justify-between'>
                        <Button
                            data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"
                            btnText='Edit' btnType='secondary' primaryAction={() => {
                                setIsDrawerOpen(true);
                            }} />
                        <Button btnText='Delete' btnType='danger' primaryAction={() => {
                            setIsModalOpen(true);
                        }} />
                        <Button btnText='Mark as Paid' btnType='primary' primaryAction={markAsPaid} />
                    </div>
                    {!!invoiceInformation && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleDelete={handleDelete} invoiceCode={invoiceInformation?.invoiceCode} />}


                </div>
                {invoiceInformation &&
                    <InvoiceInfo invoiceData={invoiceInformation} loading={loading} />
                }

            </section>

        </section>
    )
};

