import React from "react";
import { Button } from "../Button";

interface Props {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleDelete: () => void
    invoiceCode: string;
}
export default function Modal({ isModalOpen, setIsModalOpen, handleDelete, invoiceCode }: Props) {
    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-lightBg/[.6] dark:bg-darkBg/[.6] inset-0 transform ease-in-out w-full flex justify-center items-center " +
                (isModalOpen
                    ? " transition-opacity  duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-4/5 md:max-w-lg absolute bg-lightBg dark:bg-darkBg h-56 shadow-xl delay-400 duration-500 ease-in-out transition-all transform rounded-xl p-5 shadow-red-500" +
                    (isModalOpen ? " translate-x-0 " : " translate-x-2/4 ")
                }
            >
                <div className="">
                    <h3 className="font-bold text-2xl">Confirm Deletion</h3>
                    <p className="text-grey-text-light dark:text-grey-text-dark text-sm mt-4">Are you sure you want to delete invoice {invoiceCode}? This action cannot be undone.</p>
                    <div className="flex w-full justify-end space-x-3 mt-9 " >
                        <Button btnType={"secondary"} btnText={"cancel"} primaryAction={() => {
                            setIsModalOpen(false);
                        }} />
                        <Button btnType={"danger"} btnText={"Delete"} primaryAction={handleDelete} />
                    </div>

                </div>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsModalOpen(false);
                }}
            ></section>
        </main>
    );
};