import React, { ChangeEvent, useState } from 'react';
import { Filter } from './Filter';
import { PrimaryButton } from '@/components/button';

interface Props {
    handleSelectedFilter: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Header = (props: Props) => {
    const { handleSelectedFilter } = props;

    return (
        <header className='flex flex-col md:justify-between md:flex-row md:items-center'>
            <h1 className='text-lg md:text-3xl font-bold'>Invoice<br /> <span className='text-xs text-grey-text-light dark:text-grey-text-dark font-medium'>There are 7 total invoice(s)</span></h1>
            <div className='flex items-center'>
                <Filter handleSelectedFilter={handleSelectedFilter} />
                <PrimaryButton />
            </div>
        </header>
    )
}