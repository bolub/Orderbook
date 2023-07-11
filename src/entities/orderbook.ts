interface Signature {
  signatureType: number;
  r: string;
  s: string;
  v: number;
}

interface Order {
  signature: Signature;
  sender: string;
  maker: string;
  taker: string;
  takerTokenFeeAmount: string;
  makerAmount: string;
  takerAmount: string;
  makerToken: string;
  takerToken: string;
  salt: string;
  verifyingContract: string;
  feeRecipient: string;
  expiry: string;
  chainId: number;
  pool: string;
}

interface MetaData {
  orderHash: string;
  remainingFillableTakerAmount: string;
  createdAt: string;
}

interface RecordType {
  order: Order;
  metaData: MetaData;
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
