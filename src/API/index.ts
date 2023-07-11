import axios from 'axios';

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_OX_ORDERBOOK_API_URL,
  headers: {
    '0x-api-key': process.env.NEXT_PUBLIC_OX_ORDERBOOK_API_TOKEN,
  },
});
