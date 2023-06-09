import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextInput } from '@/components/form/TextInput';
import { IInvoiceProps, IItemInfoProps } from '../types';
import { invoiceData } from '../invoiceData';
import { ItemList } from './ItemList';
import { Button } from '@/components/Button';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    isEditing: boolean
    invoiceInformation?: IInvoiceProps
}
export const AddEditInvoiceForm = ({ isEditing, invoiceInformation }: Props) => {
    const [newItem, setNewItem] = useState({
        itemName: '', qty: '', unitPrice: '',
    })


    const [invoiceItemList, setInvoiceItemList] = useState<IItemInfoProps[]>([])
    const { control, handleSubmit, register } = useForm({
        defaultValues: {
            billerName: '',
            invoiceName: '',
            billerEmail: '',
            billerAddress: '',
            billedDate: '',
            dueDate: '',
            billerCity: '',
            billerCountry: '',
            items: []
        }
    });

    useEffect(() => {
        if (isEditing) {
            const list = invoiceInformation!.items.map((data: any) => data);
            setInvoiceItemList(list)
        }
    }, [])

    const handleItemChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setNewItem({
            ...newItem,
            [event.target.name]: value,
        })
    }
    const handleDelete = (id: string) => {
        const newList = invoiceItemList.filter(item => item._id !== id)
        setInvoiceItemList(newList);
    }
    const handleAddNewItem = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const latestItem = {
            ...newItem,
            _id: uuidv4(),
            itemCurrency: '$',
            totalItemPrice: Number(newItem.unitPrice) * Number(newItem.qty),
        }
        setInvoiceItemList([...invoiceItemList, latestItem]);
    }

    const handleCancel = (event: { preventDefault: () => void; }) => {

    }
    const handleDraft = (event: { preventDefault: () => void; }) => {

    }

    const handleDiscard = (event: { preventDefault: () => void; }) => {

    }

    const onSubmit: SubmitHandler<IInvoiceProps> = data => {
        if (isEditing) {
            console.log('editing data', data)
        } else {
            console.log('submiting new data', data)
        }
    }
    return (
        <form className='w-11/12 m-auto'>
            <h1 className='font-bold text-xl my-10'>{isEditing ? `Edit ${invoiceInformation?.invoiceCode}` : 'New Invoice'}</h1>
            <p className='text-accent-color mb-3'>Bill to</p>
            <Controller
                name='billerName'
                control={control}
                render={({ field }) =>
                    <TextInput
                        {...field}
                        label='Client&apos;s name'
                        inputWidth='full'
                        error=''
                        // {...register('billerName', { value: invoiceInformation?.billerName })}
                    />
                }
            />

            <Controller
                name='billerEmail'
                control={control}
                render={({ field }) =>
                    <TextInput
                        {...field}
                        label='Client&apos;s email'
                        inputWidth='full'
                    />
                }
            />

            <Controller
                name='billerAddress'
                control={control}
                render={({ field }) =>
                    <TextInput
                        {...field}
                        label='Street address'
                        inputWidth='full'
                    />
                }
            />

            <div className='flex flex-col md:flex-row justify-between w-full'>
                <Controller
                    name='billerCity'
                    control={control}
                    render={({ field }) =>
                        <TextInput
                            {...field}
                            label='City'
                            inputWidth='half'
                        />
                    }
                />

                <Controller
                    name='billerCountry'
                    control={control}
                    render={({ field }) =>
                        <TextInput
                            {...field}
                            label='Country'
                            inputWidth='half'
                        />
                    }
                />

            </div>
            <div className='flex flex-col md:flex-row justify-between w-full'>
                <Controller
                    name='billedDate'
                    control={control}
                    render={({ field }) =>
                        <TextInput
                            {...field}
                            label='Invoice Date'
                            type='date'
                            inputWidth='half'
                        />
                    }
                />

                <Controller
                    name='dueDate'
                    control={control}
                    render={({ field }) =>
                        <TextInput
                            {...field}
                            label='Due Date'
                            type='date'
                            inputWidth='half'
                        />
                    }
                />

            </div>

            <Controller
                name='invoiceName'
                control={control}
                render={({ field }) =>
                    <TextInput
                        {...field}
                        label='Project Description (e.g Graphic Design)'
                        inputWidth='full'
                    />
                }
            />

            {invoiceItemList.length > 0 &&
                <div className='mt-5'>
                    <ItemList itemsList={invoiceItemList} handleDelete={handleDelete} />
                </div>
            }
            <div>
                <div className='flex flex-col md:flex-row justify-between mt-10 w-full'>
                    <TextInput
                        name='itemName'
                        label='Item Name'
                        type='text'
                        inputWidth='quarter'
                        value={newItem.itemName}
                        onChange={handleItemChange}
                    />

                    <TextInput
                        name='qty'
                        label='Qty'
                        type='number'
                        inputWidth='quarter'
                        value={newItem.qty}
                        onChange={handleItemChange}
                    />
                    <TextInput
                        name='unitPrice'
                        label='price'
                        type='number'
                        inputWidth='quarter'
                        value={newItem.unitPrice}
                        onChange={handleItemChange}
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
                        primaryAction={handleDiscard}
                    />
                }
                <div className='flex mt-5  md:mt-0 justify-between md:w-7/12'>

                    {isEditing ?
                        <Button
                            btnType='secondary'
                            btnText='Cancel'
                            primaryAction={handleCancel}
                        /> :
                        <Button
                            btnType='draft'
                            btnText='Save as Draft'
                            primaryAction={handleDiscard}
                        />
                    }
                    <Button
                        btnType='primary'
                        btnText={isEditing ? 'Save Changes' : 'Save & Send'}
                        primaryAction={handleSubmit(onSubmit)}
                    />
                </div>
            </section>
        </form>
    )
}
