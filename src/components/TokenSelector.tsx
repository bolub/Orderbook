// Configure automatic class format
import { HiOutlineChevronDown } from 'react-icons/hi';

const TokenInput = () => {
  return (
    <div className='px-6 pt-6 pb-5 border-b border-gray-200'>
      <label className='text-sm' htmlFor='token'>
        Pay with
      </label>

      {/* When token is selected */}
      {/* <div className='bg-primary-main rounded-full pl-2 py-2 pr-8 flex mt-2 w-fit items-center space-x-2'>
        <span className='w-6 h-6 rounded-full bg-white'></span>

        <span className='my-auto'>DOGJAK</span>
      </div> */}

      {/* When token is not selected */}
      <div className='bg-primary-main rounded-full py-2 px-1 w-full max-w-[150px] cursor-pointer flex mt-2 justify-center items-center space-x-2'>
        <span className='mt-1'>Select Token</span>

        <span className='text-sm'>
          <HiOutlineChevronDown />
        </span>
      </div>

      <div className='flex mt-6 w-full items-center justify-between'>
        <input
          className='placeholder:text-gray-400 focus:outline-none text-3xl'
          placeholder='0.0'
        />

        <span className='text-gray-500'>$0.00</span>
      </div>
    </div>
  );
};

export const TokenSelector = () => {
  return (
    <div className='container flex mx-auto px-4 mt-20'>
      {/* card */}
      <div className='bg-white rounded-2xl shadow-sm border w-full max-w-md mx-auto'>
        <TokenInput />
        <TokenInput />

        <div className='p-6'>
          <button className='w-full rounded-lg p-3 bg-black hover:bg-gray-800 transition-all focus:ring-1 focus:ring-black focus:ring-offset-2 text-white'>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
