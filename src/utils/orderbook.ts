import { Order, RecordType } from "@/entities/orderbook";

interface Merchant {
  price: number;
  quantity: number;
  total: number;
}

export const parseMerchantData = (records: RecordType[]): Merchant[] => {
  let data: Merchant[] = [];

  records.forEach((record) => {
    const price =
      parseFloat(record.order.takerAmount) /
      parseFloat(record.order.makerAmount);
    const quantity = parseFloat(record.order.takerAmount);
    const total = price * quantity;

    const buyerOrder = {
      price,
      quantity,
      total,
    };

    data.push(buyerOrder);
  });

  return data;
};
