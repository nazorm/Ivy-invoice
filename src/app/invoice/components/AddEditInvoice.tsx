import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextInput } from '@/components/form/TextInput';
import { IInvoiceProps, IItemInfoProps } from '../types';
import { invoiceData } from '../invoiceData';
import { ItemList } from './ItemList';
import { Button } from '@/components/Button';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    billerName: yup.string().required(),
    invoiceName: yup.string().required(),
    billerEmail: yup.string().email().required(),
    billerAddress: yup.string().required(),
    billedDate: yup.string().required(),
    dueDate: yup.string().required(),
    billerCity: yup.string().required(),
    billerCountry: yup.string().required(),
    // items:yup.array(
    //   yup.string().required(),
    // )
    // .min(1)
})
interface Props {
    isEditing: boolean,
    invoiceInformation?: IInvoiceProps,
    setLoading :(loading: boolean)=>void,
}
export const AddEditInvoiceForm = ({ isEditing, invoiceInformation, setLoading }: Props) => {
    const [newItem, setNewItem] = useState({
        itemName: '', qty: '', unitPrice: '', itemCurrency: '₦',
    })
const [grandTotal, setGrandTotal] = useState();
    const [invoiceItemList, setInvoiceItemList] = useState<IItemInfoProps[]>([])
    const random = Math.floor(Math.random() * 9000 + 1000);

    const { control, handleSubmit, register, formState: { isDirty, errors } } = useForm({
        defaultValues: {
            billerName: '',
            invoiceName: '',
            billerEmail: '',
            billerAddress: '',
            billedDate: '',
            dueDate: '',
            billerCity: '',
            billerCountry: '',
            // items: []

        },
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    const handleTotalAmount = (newPreviewItems: any[]) => {
        const newGroundTotal = newPreviewItems.reduce((a, b) => a + b.totalItemPrice, 0);
        setGrandTotal(newGroundTotal)
       
      };
    useEffect(() => {
        if (isEditing) {
            const list = invoiceInformation!.items?.map((data: any) => data);
            setInvoiceItemList(list!)
        }
    }, [])

    const handleItemChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setNewItem({
            ...newItem,
            [event.target.name]: value,
        })
    }
    const handleDelete = (name: string) => {
        const newList = invoiceItemList.filter(item => item.itemName !== name)
        setInvoiceItemList(newList);
        handleTotalAmount(newList);
    }


    // useEffect(() => {
    //     if (invoiceItemList.length > 0) {
    //       handleTotalAmount(invoiceItemList);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, []);


    const handleAddNewItem = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const latestItem = {
            ...newItem,
            totalItemPrice: Number(newItem.unitPrice) * Number(newItem.qty),
        }
        const newListItems = [...invoiceItemList, latestItem]
        setInvoiceItemList(newListItems);
        handleTotalAmount(newListItems);
    }

    const handleCancel = (event: { preventDefault: () => void; }) => {

    }
    const handleDraft = (event: { preventDefault: () => void; }) => {

    }

    const handleDiscard = (event: { preventDefault: () => void; }) => {

    }

    const submitNewInvoice = async (data: IInvoiceProps)=>{
        setLoading(true)
        try {
            const response = await fetch("https://invoice-api-8h1u.onrender.com/invoices/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
        
            const result = await response.json();
            console.log("Success:", result);
          } catch (error) {
            console.error("Error:", error);
          }
    }
    const onSubmit: SubmitHandler<IInvoiceProps> = data => {
        if (isEditing) {
            console.log('editing data', data)
        } else {
            const submitData = {
                ...data,
                items: invoiceItemList,
                totalAmountCurrency: '₦',
                invoiceCode: "#XM" + random,
                status: 'Pending',
                totalAmount : Number(grandTotal),
            }

             submitNewInvoice(submitData)
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
                        error={errors.billerName?.message ?? ''}
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
                        error={errors.billerEmail?.message ?? ''}
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
                        error={errors.billerAddress?.message ?? ''}
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
                            error={errors.billerCity?.message ?? ''}
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
                            error={errors.billerCountry?.message ?? ''}
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
                            error={errors.billedDate?.message ?? ''}
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
                            error={errors.dueDate?.message ?? ''}
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
                        error={errors.invoiceName?.message ?? ''}
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
                            type='button'
                            btnText='Save as Draft'
                            primaryAction={handleDiscard}
                            disabled={!isDirty}
                        />
                    }
                    <Button
                        btnType='primary'
                        type='button'
                        btnText={isEditing ? 'Save Changes' : 'Save & Send'}
                        primaryAction={handleSubmit(onSubmit)}
                        disabled={!isDirty}
                    />
                </div>
            </section>
        </form>
    )
}
