import { OrderBook } from "@/entities/orderbook";
import { parseMerchantData } from "@/utils/orderbook";
import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";

export const OrderBookTable = ({
  data,
  goBack,
}: {
  data: OrderBook;
  goBack: () => void;
}) => {
  const buyers = parseMerchantData(data.bids.records);
  const sellers = parseMerchantData(data.asks.records);

  return (
    <div className="mx-auto mb-10 min-h-[70vh] w-full">
      <button onClick={goBack} className="mb-4 flex items-center text-sm">
        <span className="mr-2">
          <HiOutlineChevronLeft />
        </span>
        Go Back
      </button>

      <div className="h-full rounded-2xl border bg-white px-4 shadow-sm">
        <div className="flex h-full w-full">
          {/* buyers */}
          <div className="w-1/2 border-r pr-4 pt-6">
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
          </div>

          {/* sellers */}
          <div className="w-1/2 pl-4 pt-6">
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
                      <td className="py-2 text-right text-sm">
                        {seller.total}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
