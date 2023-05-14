import Image from 'next/image';
import React from 'react';

interface Props {
    btnType: string;
    btnText: string;
    hasIcon?: boolean
    primaryAction: () => void
}


export const Button = (props: Props) => {
    const { btnType, hasIcon, btnText, primaryAction } = props;
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
            colorClasses = "text-grey-text-light dark:text-grey-text-dark bg-color-draft hover:bg-color-text-dark dark:hover:bg-grey-border-dark dark:hover:text-grey-text-dark"
            break;
        default:
            colorClasses = "bg-accent-color hover:bg-accent-color-hover"
            break;
    }

    return (
        <button className={`${colorClasses} flex rounded-3xl py-3 px-4 font-bold text-color-text-light`} onClick={primaryAction}>
            {hasIcon && <p className='mr-3 w-6 h-6 rounded-full bg-color-text-light text-accent-color font-bold'>
                +
            </p>}
            {btnText}
        </button>
    )
};
