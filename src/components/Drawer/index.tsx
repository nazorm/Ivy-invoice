import React from "react";
interface Props {
    isDrawerOpen: boolean,
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    children : any
}
export default function Drawer({ children, isDrawerOpen, setIsDrawerOpen } : Props) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-lightBg/[.6] dark:bg-darkBg/[.6] inset-0 transform ease-in-out  " +
        (isDrawerOpen
          ? " transition-opacity  duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
            " w-4/5 md:max-w-lg right-0 absolute bg-lightBg dark:bg-darkBg h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform border" +
            (isDrawerOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="relative w-screen md:max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsDrawerOpen(false);
        }}
      ></section>
    </main>
  );
};
