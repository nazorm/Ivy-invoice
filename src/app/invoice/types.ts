export interface IInvoiceProps {
  id?: number;
  status?: string;
  invoiceCode?: string;
  invoiceName: string;
  billerName: string;
  billerEmail: string;
  billerAddress: string;
  billedDate: string;
  dueDate: string;
  totalAmountCurrency?: string;
  totalAmount?: number;
  billerCity?: string;
  billerCountry?: string;
  items: IItemInfoProps[];
}
export interface IItemInfoProps {
  id: number;
  itemName: string;
  qty: number;
  unitPrice: number;
  totalItemPrice: number;
  itemCurrency?: string;
}
