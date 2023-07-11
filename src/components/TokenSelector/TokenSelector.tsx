// Configure automatic class format
import { getOrderbookData } from '@/API/orderbook';
import { TokenType, TokenView } from '@/components/TokenSelector/TokenView';
import { Dispatch, SetStateAction, useState } from 'react';

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
    <div className='px-6 pt-6 pb-5 border-b border-gray-200'>
      <label className='text-sm' htmlFor='token'>
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
    <div className='container flex mx-auto px-4 mt-20'>
      {/* card */}
      <div className='bg-white rounded-2xl shadow-sm border w-full max-w-md mx-auto'>
        <TokenInput
          label='Base token'
          token={baseToken}
          setToken={setBaseToken}
        />
        <TokenInput
          label='Quote Token'
          token={quoteToken}
          setToken={setQuoteToken}
        />

        <div className='p-6'>
          <button
            onClick={handleOrderbookData}
            className='w-full rounded-lg p-3 bg-black hover:bg-gray-800 transition-all focus:ring-1 focus:ring-black focus:ring-offset-2 text-white'
          >
            Get Ordebook Data
          </button>
        </div>
      </div>
    </div>
  );
};
