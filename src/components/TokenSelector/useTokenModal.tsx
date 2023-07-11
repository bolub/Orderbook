import { HiOutlineX, HiSearch } from "react-icons/hi";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Token } from "@/components/TokenSelector/Token";
import { TokenType } from "@/components/TokenSelector/TokenView";
import { tokenList } from "@/data/tokenList";

export const useTokenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const TokenModal = ({ action }: { action?: (token: TokenType) => void }) => {
    const [searchValue, setSearchValue] = useState("");

    const filteredTokenList = tokenList.filter((token) => {
      return (
        token.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        token.ticker.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="relative border-b border-gray-200 px-6">
                    <span className="absolute inset-y-5 text-xl">
                      <HiSearch />
                    </span>

                    <input
                      className="h-full w-full py-5 pl-7 focus:outline-none"
                      placeholder="Search token or paste address"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button
                      onClick={closeModal}
                      className="absolute inset-y-5 right-4 text-xl"
                    >
                      <HiOutlineX />
                    </button>
                  </Dialog.Title>

                  <div className="mt-4">
                    <p className="px-6 text-sm text-gray-500">
                      Trending Tokens
                    </p>

                    <div className="mt-4 flex h-full max-h-[40vh] flex-col overflow-y-auto pb-4">
                      {filteredTokenList.map((token) => {
                        return (
                          <Token
                            key={token.name}
                            onClick={() => {
                              action && action(token);
                              closeModal();
                            }}
                            token={token}
                          />
                        );
                      })}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return { isOpen, closeModal, openModal, TokenModal };
};
