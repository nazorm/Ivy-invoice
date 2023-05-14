import React, { ChangeEvent } from 'react';

interface Props {
    handleSelectedFilter: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Filter = (props: Props) => {
    const {  handleSelectedFilter } = props;
    return (
        <form className='mr-5'>
            <label htmlFor='filter' className='font-bold text-color-text-dark dark:text-color-text-light'>Filter &nbsp;</label>
            <select onChange={handleSelectedFilter} className='bg-lightBg dark:bg-darkBg focus:outline-none'>
                <option value=''>status</option>
                <option value='pending'>Pending</option>
                <option value='paid'>Paid</option>
                <option value='draft'>Draft</option>
            </select>
        </form>
    )
}


