export interface Order {
  takerTokenFeeAmount: string;
  makerAmount: string;
  takerAmount: string;
}

export interface RecordType {
  order: Order;
  metaData: {
    orderHash: string;
    remainingFillableTakerAmount: string;
    createdAt: Date;
    state?: string;
  };
}

interface Bids {
  total: number;
  page: number;
  perPage: number;
  records: RecordType[];
}

interface Asks {
  total: number;
  page: number;
  perPage: number;
  records: RecordType[];
}

export interface OrderBook {
  bids: Bids;
  asks: Asks;
}
