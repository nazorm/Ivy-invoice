export const invoiceData = {
  status: "pending",
  invoiceName: "Graphic Design",
  billerName: "Alex Grim",
  billerEmail: "alexgrim@gmail.com",
  billerAddress: "84 Church Way Bradford BD1 9PB United Kingdom",
  billedDate: new Date(),
  dueDate: new Date(),
  totalAmountCurrency: "£",
  totalAmount: "556.00",
  items: [
    {
      itemName: "Banner Design",
      qty: 1,
      price: "156.0",
      itemCurrency: "£",
      totalItemPrice: "156.0",
    },
    {
      itemName: "Email Design",
      qty: 2,
      price: "200.0",
      itemCurrency: "£",
      totalItemPrice: "400.0",
    },
  ],
};
