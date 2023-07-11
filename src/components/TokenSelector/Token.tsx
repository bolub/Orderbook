import React from 'react';

export const Token = ({
  name,
  symbol,
  onClick,
}: {
  name: string;
  symbol: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className='flex space-x-2 py-2 hover:bg-gray-100 cursor-pointer px-6'
    >
      <span className='rounded-full h-10 w-10 bg-purple-400'></span>
      <div>
        <p className='text-sm'>{name}</p>
        <p className='text-xs text-gray-500'>{symbol}</p>
      </div>
    </div>
  );
};
