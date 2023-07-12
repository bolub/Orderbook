import { HiOutlineChevronDown } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";
import { useTokenModal } from "@/components/TokenSelector/useTokenModal";
import Image from "next/image";
import { TokenType } from "@/API/tokens";

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
        className="mt-2 flex w-fit cursor-pointer items-center justify-center space-x-2 rounded-full bg-primary-main px-4 py-2"
      >
        <span className="mt-1">Select Token</span>

        <span className="text-sm">
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
        className="mt-2 flex w-fit cursor-pointer items-center space-x-2 rounded-full bg-primary-main py-2 pl-2 pr-4"
      >
        <Image
          width={28}
          height={28}
          src={selectedToken.logoURI}
          alt={selectedToken.name}
          className="rounded-full bg-purple-400 object-cover"
        />

        <span className="mt-1">{selectedToken?.symbol}</span>

        <span className="ml-2 text-sm">
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
