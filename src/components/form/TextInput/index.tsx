import React from 'react';


interface ITextInputProps {
    label?: string,
    error?: string,
    inputWidth : string,
    [x: string]: any;
}


export const TextInput = (props: ITextInputProps) => {
    const { label, name, error, inputWidth, ...textInputProps } = props
    let widthStyle = '';
    switch (inputWidth) {
        case "full":
            widthStyle = "md:w-full"
            break;
        case "half":
            widthStyle = "md:w-5/6"
        case "quarter":
            widthStyle = "md:w-5/6"
            break;
        default:
            widthStyle = ""
            break;
    }
    return (
        <div className={`${widthStyle}`}>
            {label && <label className='text-accent-color-text dark:text-grey-text-dark'
             htmlFor={name}>{label}</label>}
             <br/>
            <input
            className={`${widthStyle} rounded border-grey-text-dark bg-color-text-light dark:bg-grey-border-dark p-3 my-2 font-bold text-sm focus:outline-none`}
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
