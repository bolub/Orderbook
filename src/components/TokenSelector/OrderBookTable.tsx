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
    <div className="mx-auto mb-10 min-h-[70vh] w-full max-w-[800px]">
      <button onClick={goBack} className="mb-4 flex items-center text-sm">
        <span className="mr-2">
          <HiOutlineChevronLeft />
        </span>
        Go Back
      </button>

      <div className="h-full rounded-2xl border bg-white shadow-sm">
        <div className="flex h-full w-full">
          {/* buyers */}
          <div className="w-1/2 border-r pt-6">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="pl-4 text-left text-[13px] font-medium text-gray-600">
                    Price(USD)
                  </th>
                  <th className="text-right text-[13px] font-medium text-gray-600">
                    Quantity(USD)
                  </th>
                  <th className="pr-4 text-right text-[13px] font-medium text-gray-600">
                    Total(USD)
                  </th>
                </tr>
              </thead>

              <tbody>
                {buyers.map((buyer, index) => {
                  return (
                    <tr
                      key={index}
                      className="cursor-pointer transition-colors hover:bg-gray-50"
                    >
                      <td className="py-2 pl-4 text-sm text-green-500">
                        {buyer.price}
                      </td>
                      <td className="py-2 text-right text-sm">
                        {buyer.quantity}
                      </td>
                      <td className="py-2 pr-4 text-right text-sm">
                        {buyer.total}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* sellers */}
          <div className="w-1/2 pt-6">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="pl-4 text-left text-[13px] font-medium text-gray-600">
                    Total(USD)
                  </th>
                  <th className="text-left text-[13px] font-medium text-gray-600">
                    Quantity(USD)
                  </th>
                  <th className="pr-4 text-right text-[13px] font-medium text-gray-600">
                    Price(USD)
                  </th>
                </tr>
              </thead>

              <tbody>
                {sellers.map((seller, index) => {
                  return (
                    <tr
                      key={index}
                      className="cursor-pointer transition-colors hover:bg-gray-50"
                    >
                      <td className="py-2 pl-4 text-left text-sm">
                        {seller.total}
                      </td>
                      <td className="py-2 text-left text-sm">
                        {seller.quantity}
                      </td>
                      <td className="py-2 pr-4 text-right text-sm text-red-500">
                        {seller.price}
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
