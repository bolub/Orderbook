import React from "react";
import Image from "next/image";
import { TokenType } from "@/API/tokens";

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
      className="flex cursor-pointer space-x-2 px-6 py-2 hover:bg-gray-100"
    >
      <Image
        src={token.logoURI}
        width={40}
        height={40}
        className="rounded-full bg-purple-400 object-cover"
        alt={token.name}
      />

      <div>
        <p className="text-sm">{token.name}</p>
        <p className="text-xs text-gray-500">{token.symbol}</p>
      </div>
    </div>
  );
};
