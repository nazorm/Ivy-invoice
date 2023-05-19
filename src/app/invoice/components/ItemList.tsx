import React from 'react';

interface IItemsProps {
    itemsList: IItemInfo[]
}
export interface IItemInfo {
    itemName: string,
    qty: number,
    price: number,
    totalItemPrice: number,
    itemCurrency: string,
}

export const ItemList = ({ itemsList }: IItemsProps) => {
    const totalPrice = itemsList.reduce((a, b) => a + b.totalItemPrice, 0)
    return (
        <div className='w-full my-10 bg-default-light-color dark:bg-grey-blue p-5 rounded-lg'>
            <table className="w-full text-left md:m-10 ">
                <thead className='p-5'>
                    <tr className='py-5'>
                        <th>Item Name</th>
                        <th>QTY</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsList.map((data) => {
                        return (
                            <tr key={data.itemName} className='py-5'>
                                <td>{data.itemName}</td>
                                <td>{data.qty}</td>
                                <td>{data.itemCurrency}{data.price}</td>
                                <td>{data.itemCurrency}{data.totalItemPrice}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='flex w-full justify-between items-center md:pl-10 md:pr-16 h-20 mt-10 px-5 bg-regal-blue dark:bg-color-text-black rounded-lg'>
                <p className='text-color-text-light font-light text-sm'>Amount Due</p>
                <p className='text-color-text-light font-bold text-xl'>£ {totalPrice}</p>
            </div>
        </div>
    )
}
