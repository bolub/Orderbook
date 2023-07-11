import { HiOutlineChevronDown } from 'react-icons/hi';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTokenModal } from '@/components/TokenSelector/useTokenModal';
import Image from 'next/image';

export type TokenType = {
  ticker: string;
  img: string;
  name: string;
  address: string;
  decimals: number;
};

const NotSelected = ({
  setSelectedToken,
}: {
  setSelectedToken: Dispatch<SetStateAction<TokenType | undefined>>;
}) => {
  const { openModal, TokenModal } = useTokenModal();

  return (
    <>
      <div
        onClick={openModal}
        className='bg-primary-main rounded-full py-2 px-4 w-fit cursor-pointer flex mt-2 justify-center items-center space-x-2'
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
  selectedToken: TokenType;
  setSelectedToken: Dispatch<SetStateAction<TokenType | undefined>>;
}) => {
  const { openModal, TokenModal } = useTokenModal();

  return (
    <>
      <div
        onClick={openModal}
        className='bg-primary-main rounded-full pl-2 py-2 pr-4 flex mt-2 w-fit items-center space-x-2 cursor-pointer'
      >
        <Image
          width={28}
          height={28}
          src={selectedToken.img}
          alt={selectedToken.name}
          className='rounded-full bg-purple-400 object-cover'
        />

        <span className='mt-1'>{selectedToken?.ticker}</span>

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

export const TokenView = ({
  setSelectedToken,
  selectedToken,
}: {
  selectedToken?: TokenType;
  setSelectedToken: Dispatch<SetStateAction<TokenType | undefined>>;
}) => {
  return (
    <>
      {selectedToken ? (
        <Selected
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
      ) : (
        <NotSelected setSelectedToken={setSelectedToken} />
      )}
    </>
  );
};
