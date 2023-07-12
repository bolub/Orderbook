import axios from "axios";

export type TokenType = {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
};

type Tokens = () => Promise<TokenType[]>;

export const getTokensList: Tokens = async () => {
  const response = await axios.get(
    "https://tokens.coingecko.com/uniswap/all.json"
  );

  return response.data.tokens;
};
