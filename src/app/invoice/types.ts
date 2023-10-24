export interface IInvoiceProps {
  _id?: number,
  status?: string,
  invoiceCode?: string,
  invoiceName?: string;
  billerName?: string;
  billerEmail?: string;
  billerAddress?: string;
  billedDate?: string;
  dueDate?: string;
  totalAmountCurrency?: string,
  totalAmount?: number,
  billerCity?: string,
  billerCountry?: string,
  items?: IItemInfoProps[],
}
export interface IItemInfoProps {
  _id?: string,
  itemName: string,
  qty: number | string,
  unitPrice: number | string,
  itemCurrency?: string,
  totalItemPrice: number | string,
}

