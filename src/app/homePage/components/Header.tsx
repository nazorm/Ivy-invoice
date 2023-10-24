import React, { ChangeEvent, useState } from 'react';
import { Filter } from './Filter';
import { Button } from '@/components/Button';
import { AddEditInvoiceForm } from '@/app/invoice/components/AddEditInvoice';
import Drawer from '@/components/Drawer';

interface Props {
    handleSelectedFilter: (event: ChangeEvent<HTMLSelectElement>) => void
    noOfInvoice : number;
}

export const Header = (props: Props) => {
    const { handleSelectedFilter, noOfInvoice } = props;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    
    const goToInvoiceForm = () => {
        setIsDrawerOpen(true)
    }
    return (
        <>
            <header className='flex flex-col md:justify-between md:flex-row md:items-center'>
                <h1 className='text-lg md:text-3xl font-bold'>Invoice<br /> <span className='text-xs text-grey-text-light dark:text-grey-text-dark font-medium'>There are {noOfInvoice} total invoice(s)</span></h1>
                <div className='flex items-center'>
                    <Filter handleSelectedFilter={handleSelectedFilter} />
                    <Button btnType='primary' hasIcon={true} btnText='New Invoice' primaryAction={goToInvoiceForm} />
                </div>
            </header>
            <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
                <AddEditInvoiceForm isEditing={false} setLoading={setLoading} />
            </Drawer>
            {loading  && <p>Loading...</p>}
        </>

    )
};
