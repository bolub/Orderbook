import { RecordType } from "@/entities/orderbook";

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

    const merchantOrder = {
      price: parseFloat(price.toFixed(2)),
      quantity: parseFloat(quantity.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
    };

    data.push(merchantOrder);
  });

  return data;
};
