import { Sidebar } from '@/components/layout/Sidebar';
import { InvoiceScreen } from '../components';

export default function InvoicePage({params}:{params:{id:string}}) {
  return (
    <main className='bg-lightBg dark:bg-darkBg flex'>
      <Sidebar/>
      <InvoiceScreen invoiceId={params.id} />
    </main>
  )
};
