import React from 'react';


interface ITextInputProps {
    label?: string,
    error?: string,
    [x: string]: any;
}


const TextInput = (props: ITextInputProps) => {
    const { label, name, error, ...textInputProps } = props
    return (
        <div>
            {label && <label className='text-accent-color-text dark:text-grey-text-dark'
             htmlFor={name}>{label}</label>}
            <input
            className='rounded border-grey-text-dark dark:bg-grey-border-dark'
                placeholder=""
                {...textInputProps}
                id={name}
                name={name}
            />
            <p className='text-color-red'>
                {error}
            </p>
        </div>
    )
}
