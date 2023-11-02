import Image from 'next/image';
import { type } from 'os';
import React from 'react';

interface Props {
    btnType: string;
    btnText: string;
    hasIcon?: boolean;
    primaryAction?: (e: any) => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}


export const Button = (props: Props) => {
    const { btnType, hasIcon, btnText, disabled, type, primaryAction } = props;
    let colorClasses = "bg-accent-color hover:bg-accent-color-hover"
    switch (btnType) {
        case "primary":
            colorClasses = "bg-accent-color hover:bg-accent-color-hover"
            break;
        case "secondary":
            colorClasses = "text-accent-color-text dark:text-grey-text-dark bg-default-light-color hover:bg-grey-text-dark dark:bg-grey-blue dark:hover:bg-color-text-light"
            break;
        case "danger":
            colorClasses = "bg-color-red hover:bg-color-red-hover text-color-text-light"
            break;
        case "draft":
            colorClasses = "text-grey-text-light dark:text-grey-text-dark bg-color-draft hover:bg-color-text-black dark:hover:bg-grey-border-dark dark:hover:text-grey-text-dark"
            break;
        default:
            colorClasses = "bg-accent-color hover:bg-accent-color-hover"
            break;
    }

    return (
        <button className={`${colorClasses} disabled:${colorClasses}/[.5] flex rounded-3xl px-4  py-2 text-sm  font-bold text-color-text-light`}
            disabled={disabled}
            onClick={primaryAction}
            type= {type}
        >
            {hasIcon && <p className='mr-3 w-6 h-6 rounded-full bg-color-text-light text-accent-color font-bold'>
                +
            </p>}
            {btnText}
        </button>
    )
};
