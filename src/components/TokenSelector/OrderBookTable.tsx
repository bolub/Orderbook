import { OrderBook as OrderBookType } from "@/entities/orderbook";
import { parseMerchantData } from "@/utils/orderbook";
import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { OrderBook } from "@lab49/react-order-book";

// This is a simple order book structure. There's an array
// of asks, and array of bids. Each entry in the array is
// an array where the first index represents the price,
// and the second index represents the "size", or the total
// number of units of an asset offered at that price.
// const book = {
//   asks: [
//     ["1.01", "2"],
//     ["1.02", "3"],
//   ],
//   bids: [
//     ["0.99", "5"],
//     ["0.98", "3"],
//   ],
// };

export const OrderBookTable = ({
  data,
  goBack,
}: {
  data: OrderBookType;
  goBack: () => void;
}) => {
  const book = parseMerchantData(data);

  return (
    <div className="mx-auto mb-10 min-h-[70vh] w-full">
      <button onClick={goBack} className="mb-4 flex items-center text-sm">
        <span className="mr-2">
          <HiOutlineChevronLeft />
        </span>
        Go Back
      </button>

      <div className="h-full w-full rounded-2xl border bg-white px-4 shadow-sm">
        <OrderBook
          layout="row"
          book={book}
          fullOpacity
          interpolateColor={(color) => color}
          listLength={10}
          stylePrefix="MakeItNiceAgain"
          showSpread={false}
          showHeaders
        />

        {/* <div className="flex h-full w-full">
          {/* buyers */}
        {/* <div className="w-1/2 border-r pr-4 pt-6">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium">Price(USD)</th>
                <th className="text-right text-sm font-medium">
                  Quantity(USD)
                </th>
                <th className="text-right text-sm font-medium">Total(USD)</th>
              </tr>
            </thead>

            <tbody>
              {buyers.map((buyer, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2 text-sm">{buyer.price}</td>
                    <td className="py-2 text-right text-sm">
                      {buyer.quantity}
                    </td>
                    <td className="py-2 text-right text-sm">{buyer.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}

        {/* sellers */}
        {/* <div className="w-1/2 pl-4 pt-6">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium">Price(USD)</th>
                <th className="text-right text-sm font-medium">
                  Quantity(USD)
                </th>
                <th className="text-right text-sm font-medium">Total(USD)</th>
              </tr>
            </thead>

            <tbody>
              {sellers.map((seller, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2 text-sm">{seller.price}</td>
                    <td className="py-2 text-right text-sm">
                      {seller.quantity}
                    </td>
                    <td className="py-2 text-right text-sm">{seller.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
        {/* </div>  */}
      </div>
    </div>
  );
};
