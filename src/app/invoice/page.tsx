import Image from 'next/image'
import { Sidebar } from '@/components/layout/sidebar';
import { InvoiceScreen } from './components';

export default function InvoicePage() {
  return (
    <main className='bg-lightBg dark:bg-darkBg flex'>
      <Sidebar/>
      <InvoiceScreen />
    </main>
  )
}
