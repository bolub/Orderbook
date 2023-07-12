import { Order, OrderBook, RecordType } from "@/entities/orderbook";

interface Merchant {
  price: number;
  quantity: number;
  total: number;
}

export const parseMerchantData = (data: OrderBook) => {
  const book: {
    asks: any;
    bids: any;
  } = {
    asks: [],
    bids: [],
  };

  // Refactor sellers' data (asks)
  data.asks.records.forEach((record) => {
    const price = (
      parseFloat(record.order.takerAmount) /
      parseFloat(record.order.makerAmount)
    ).toFixed(2);
    const quantity = parseFloat(record.order.takerAmount).toString();

    const sellerOrder = [price, quantity];
    book.asks.push(sellerOrder);
  });

  // Refactor buyers' data (bids)
  data.bids.records.forEach((record) => {
    const price = (
      parseFloat(record.order.makerAmount) /
      parseFloat(record.order.takerAmount)
    ).toFixed(2);
    const quantity = parseFloat(record.order.makerAmount).toString();

    const buyerOrder = [price, quantity];
    book.bids.push(buyerOrder);
  });

  return book;
};
