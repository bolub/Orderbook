import { tokenList } from "@/data/tokenList";

export type TokenType = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
};

type Tokens = () => Promise<TokenType[]>;

export const getTokensList: Tokens = async () => {
  // const response = await axios.get(
  //   "http://tokens.coingecko.com/uniswap/all.json"
  // );

  return tokenList;
};
