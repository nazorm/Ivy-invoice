import React, { useEffect, useState } from 'react';
import { TextInput } from '@/components/form/TextInput';
import { IItemInfoProps } from '../types';
import { invoiceData } from '../invoiceData';
import { ItemList } from './ItemList';
import { Button } from '@/components/Button';

interface Props {
    isEditing: boolean
}
export const AddEditInvoiceForm = ({ isEditing }: Props) => {
    const [newItem, setNewItem] = useState({
        itemName: '', qty: '', price: '', total: ''
    })
    const [invoiceItemList, setInvoiceItemList] = useState<IItemInfoProps[]>([])

    useEffect(() => {
        const list = invoiceData.items.map(data => data);
        setInvoiceItemList(list);
    }, [])
    const handleDelete = (id: number) => {
        const newList = invoiceItemList.filter(item => item.id !== id)
        setInvoiceItemList(newList);
    }
    const handleAddNewItem = () => {

    }
    return (
        <form className='w-11/12 m-auto'>
            <h1 className='font-bold text-xl mb-10'>Edit #XM9141</h1>
            <p className='text-accent-color mb-3'>Bill to</p>
            <TextInput
                name='client-name'
                label='Client&apos;s name'
                inputWidth='full'
            />
            <TextInput
                name='client-email'
                label='Client&apos;s email'
                inputWidth='full'
            />
            <TextInput
                name='client-address'
                label='Street address'
                inputWidth='full'
            />
            <div className='flex flex-col md:flex-row justify-between w-full'>
                <TextInput
                    name='client-city'
                    label='City'
                    inputWidth='half'
                />
                <TextInput
                    name='client-country'
                    label='Country'
                    inputWidth='half'
                />
            </div>
            <div className='flex flex-col md:flex-row justify-between w-full'>
                <TextInput
                    name='invoice-date'
                    label='Invoice Date'
                    type='date'
                    inputWidth='half'
                />
                <TextInput
                    name='due-date'
                    label='Due Date'
                    type='date'
                    inputWidth='half'
                />
            </div>
            <TextInput
                name='project-description'
                label='Project Description'
                inputWidth='full'
            />
            {invoiceItemList.length > 0 &&
                <div className='mt-5'>
                    <ItemList itemsList={invoiceItemList} handleDelete={handleDelete} />
                </div>
            }
            <div>
                <div className='flex flex-col md:flex-row justify-between mt-10 w-full'>
                    <TextInput
                        name='item_name'
                        label='Item Name'
                        type='text'
                        inputWidth='quarter'
                    />
                    <TextInput
                        name='qty'
                        label='Qty'
                        type='number'
                        inputWidth='quarter'
                    />
                    <TextInput
                        name='price'
                        label='price'
                        type='number'
                        inputWidth='quarter'
                    />

                </div>
                <div className='flex justify-end mt-5'>
                    <Button
                        btnType='secondary'
                        btnText='+ Add New Item'
                        primaryAction={handleAddNewItem}
                    />
                </div>
            </div>


            <section className='flex md:justify-between mt-10'>
                {!isEditing &&
                    <Button
                        btnType='secondary'
                        btnText='Discard'
                        primaryAction={handleAddNewItem}
                    />
                }
                <div className='flex mt-5  md:mt-0 justify-between max-w-xs w-56'>

                    {isEditing ?
                        <Button
                            btnType='secondary'
                            btnText='Cancel'
                            primaryAction={handleAddNewItem}
                        /> :
                        <Button
                            btnType='draft'
                            btnText='Save as Draft'
                            primaryAction={handleAddNewItem}
                        />
                    }
                    <Button
                        btnType='primary'
                        btnText={isEditing ? 'Save Changes' : 'Save & Send'}
                        primaryAction={handleAddNewItem}
                    />
                </div>
            </section>
        </form>
    )
}
