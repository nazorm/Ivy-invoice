import React from 'react';
import { IItemInfoProps } from '../types';
import binIcon from '../../../assets/bin.svg'
import Image from 'next/image';
interface Props {
    itemsList: IItemInfoProps[],
    isCurrencyShown?: boolean,
    handleDelete?: (id:string) => void
}

export const ItemList = ({ itemsList: items, isCurrencyShown, handleDelete}: Props) => {

    return (
        <table className="w-full text-left  ">
            <thead className='p-5'>
                <tr className='py-5'>
                    <th>Item Name</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {items.map((data) => {
                    return (
                        <tr key={data._id} className='py-5'>
                            <td>{data.itemName}</td>
                            <td>{data.qty}</td>
                            <td>{isCurrencyShown ? data.itemCurrency : ''}{data.unitPrice}</td>
                            <td>{isCurrencyShown ? data.itemCurrency : ''}{data.totalItemPrice}</td>
                            {!isCurrencyShown &&
                                <td >
                                    <Image src={binIcon} alt='bin'  onClick={()=>handleDelete?.(data.itemName)} className='hover:cursor-pointer'/>
                                </td>
                            }

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

