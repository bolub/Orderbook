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
  return tokenList;
};
