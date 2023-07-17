// Configure automatic class format
import { Dispatch, SetStateAction, useState } from "react";
import { TokenType } from "@/API/tokens";
import { TokenView } from "@/components/TokenSelector/TokenView";
import { useRouter } from "next/router";

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

  const router = useRouter();

  return (
    <>
      <div className="container mx-auto flex px-4">
        <div className="mx-auto mt-20 w-full max-w-md rounded-2xl border bg-white shadow-sm">
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
              disabled={!baseToken || !quoteToken}
              onClick={() => {
                router.push(
                  `/orderbook/${baseToken?.symbol}-${quoteToken?.symbol}?baseToken=${baseToken?.address}&quoteToken=${quoteToken?.address}`
                );
              }}
              className="w-full rounded-lg bg-black p-3 text-white transition-all hover:bg-gray-800 focus:ring-1 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Get Orderbook Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
