import { HiOutlineChevronDown } from 'react-icons/hi';
import { useState } from 'react';
import { useTokenModal } from '@/components/TokenSelector/useTokenModal';

export type TokenType = {
  name: string;
  symbol: string;
};

const NotSelected = ({
  setSelectedToken,
}: {
  selectedToken?: TokenType;
  setSelectedToken: any;
}) => {
  const { openModal, TokenModal } = useTokenModal();

  return (
    <>
      <div
        onClick={openModal}
        className='bg-primary-main rounded-full py-2 px-1 w-full max-w-[150px] cursor-pointer flex mt-2 justify-center items-center space-x-2'
      >
        <span className='mt-1'>Select Token</span>

        <span className='text-sm'>
          <HiOutlineChevronDown />
        </span>
      </div>

      <TokenModal
        action={(token) => {
          setSelectedToken(token);
        }}
      />
    </>
  );
};

const Selected = ({
  selectedToken,
  setSelectedToken,
}: {
  selectedToken?: TokenType;
  setSelectedToken: any;
}) => {
  const { openModal, TokenModal } = useTokenModal();

  return (
    <>
      <div
        onClick={openModal}
        className='bg-primary-main rounded-full pl-2 py-2 pr-8 flex mt-2 w-fit items-center space-x-2 cursor-pointer'
      >
        <span className='w-6 h-6 rounded-full bg-white'></span>

        <span className='mt-1'>
          {selectedToken?.name} ({selectedToken?.symbol})
        </span>

        <span className='text-sm ml-2'>
          <HiOutlineChevronDown />
        </span>
      </div>

      <TokenModal
        action={(token) => {
          setSelectedToken(token);
        }}
      />
    </>
  );
};

export const TokenView = () => {
  const [selectedToken, setSelectedToken] = useState<TokenType | undefined>(
    undefined
  );

  return (
    <>
      {selectedToken ? (
        <Selected
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
      ) : (
        <NotSelected
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
      )}
    </>
  );
};
