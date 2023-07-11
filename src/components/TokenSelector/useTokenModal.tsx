import { HiOutlineX, HiSearch } from 'react-icons/hi';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Token } from '@/components/TokenSelector/Token';
import { TokenType } from '@/components/TokenSelector/TokenView';

export const useTokenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const TokenModal = ({ action }: { action?: (token: TokenType) => void }) => {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title className='px-6 border-b border-gray-200 relative'>
                    <span className='absolute inset-y-5 text-xl'>
                      <HiSearch />
                    </span>

                    <input
                      className='w-full h-full focus:outline-none py-5 pl-7'
                      placeholder='Search token or paste address'
                    />

                    <button
                      onClick={closeModal}
                      className='absolute inset-y-5 text-xl right-4'
                    >
                      <HiOutlineX />
                    </button>
                  </Dialog.Title>

                  <div className='mt-4'>
                    <p className='text-sm text-gray-500 px-6'>
                      Trending Tokens
                    </p>

                    <div className='mt-4 flex flex-col pb-4 overflow-y-auto h-full max-h-[40vh]'>
                      {[
                        { name: 'Bitcoin', symbol: 'BTC' },
                        { name: 'Ethereum', symbol: 'ETH' },
                      ].map((token) => {
                        return (
                          <Token
                            key={token.name}
                            onClick={() => {
                              action && action(token);
                              closeModal();
                            }}
                            name={token.name}
                            symbol={token.symbol}
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
