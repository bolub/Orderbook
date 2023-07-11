// Configure automatic class format
import { getOrderbookData } from "@/API/orderbook";
import { TokenType, TokenView } from "@/components/TokenSelector/TokenView";
import { Dispatch, SetStateAction, useState } from "react";

const TokenInput = ({
  token,
  setToken,
  label,
}: {
  label: string;
  token?: TokenType;
  setToken: Dispatch<SetStateAction<TokenType | undefined>>;
}) => {
  return (
    <div className="border-b border-gray-200 px-6 pb-5 pt-6">
      <label className="text-sm" htmlFor="token">
        {label}
      </label>

      <TokenView selectedToken={token} setSelectedToken={setToken} />
    </div>
  );
};

export const TokenSelector = () => {
  const [baseToken, setBaseToken] = useState<TokenType | undefined>();
  const [quoteToken, setQuoteToken] = useState<TokenType | undefined>();

  const handleOrderbookData = async () => {
    if (!baseToken || !quoteToken) return;

    try {
      const data = await getOrderbookData({
        baseToken: baseToken?.address,
        quoteToken: quoteToken?.address,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-20 flex px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl border bg-white shadow-sm">
        <TokenInput
          label="Base token"
          token={baseToken}
          setToken={setBaseToken}
        />
        <TokenInput
          label="Quote Token"
          token={quoteToken}
          setToken={setQuoteToken}
        />

        <div className="p-6">
          <button
            onClick={handleOrderbookData}
            className="w-full rounded-lg bg-black p-3 text-white transition-all hover:bg-gray-800 focus:ring-1 focus:ring-black focus:ring-offset-2"
          >
            Get Ordebook Data
          </button>
        </div>
      </div>
    </div>
  );
};
