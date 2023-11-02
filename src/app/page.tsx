import Image from 'next/image'
import HomePage from './homePage/page';
import { Sidebar } from '@/components/layout/Sidebar/index';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //   </div>

    // </main>
    <main className='bg-lightBg dark:bg-darkBg flex'>
      <Sidebar/>
      <HomePage />
    </main>
  )
}
