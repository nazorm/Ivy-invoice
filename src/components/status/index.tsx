import React from 'react'

interface ITagProps {
    status: string;
}
export const StatusTags = (props: ITagProps) => {
    const { status } = props;
    let colorClasses = "bg-grey-text-dark/[.06] text-grey-text-dark"
    switch (status.toUpperCase()) {
        case "PAID":
            colorClasses = "bg-color-success/[.06] text-color-success"
            break;
        case "PENDING":
            colorClasses = "bg-color-warning/[.06] text-color-warning"
            break;
        case "DRAFT":
            colorClasses = "bg-grey-text-dark/[.06] text-grey-text-dark"
            break;
        default:
            colorClasses = "bg-grey-text-dark/[.06] text-grey-text-dark"
            break;
    }
    return (
        <span className={`text-sm ${colorClasses} font-bold py-3 px-4 rounded-lg before:content-['•'] before:mr-2 capitalize`}>
            {status}
        </span>
    )
};
