import { OrderBook } from '@/entities/orderbook';
import API from '.';

type Data = {
  orderbook: (args: {
    baseToken: string;
    quoteToken: string;
  }) => Promise<OrderBook>;
};

export const getOrderbookData: Data['orderbook'] = async ({
  baseToken,
  quoteToken,
}) => {
  const response = await API.get(
    `?baseToken=${baseToken}&quoteToken=${quoteToken}`
  );

  return response.data;
};
