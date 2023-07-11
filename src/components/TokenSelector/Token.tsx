import React from 'react';
import { TokenType } from '@/components/TokenSelector/TokenView';
import Image from 'next/image';

export const Token = ({
  onClick,
  token,
}: {
  token: TokenType;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className='flex space-x-2 py-2 hover:bg-gray-100 cursor-pointer px-6'
    >
      {/* <span className='rounded-full h-10 w-10 bg-purple-400'></span> */}
      <Image
        src={token.img}
        width={40}
        height={40}
        className='rounded-full bg-purple-400 object-cover'
        alt={token.name}
      />

      <div>
        <p className='text-sm'>{token.name}</p>
        <p className='text-xs text-gray-500'>{token.ticker}</p>
      </div>
    </div>
  );
};
