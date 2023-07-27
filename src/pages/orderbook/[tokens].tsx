import { getOrderbookData } from "@/API/orderbook";
import { OrderBookTable } from "@/components/TokenSelector/OrderBookTable";
import { processMessages } from "@/containers/tokens/utils";
import { OrderBook } from "@/entities/orderbook";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const OrderbookDisplay = () => {
  const router = useRouter();

  const { baseToken, quoteToken } = router.query as {
    tokens: string;
    baseToken: string;
    quoteToken: string;
  };

  const [asks, setAsks] = useState<OrderBook["asks"]>({
    total: 0,
    page: 0,
    perPage: 0,
    records: [],
  });
  const [bids, setBids] = useState<OrderBook["bids"]>({
    total: 0,
    page: 0,
    perPage: 0,
    records: [],
  });

  const { data } = useQuery({
    queryKey: ["orderbook", baseToken, quoteToken],
    queryFn: () => {
      return getOrderbookData({
        baseToken,
        quoteToken,
      });
    },
    enabled: Boolean(baseToken) && Boolean(quoteToken),
    onSuccess(data) {
      setAsks(data.asks);
      setBids(data.bids);
    },
  });

  // Handle Rapidly changing data via websockets
  useEffect(() => {
    const client = new WebSocket("wss://api.0x.org/orderbook/v1");

    client.onopen = () => {
      client.send(
        JSON.stringify({
          type: "subscribe",
          channel: "orders",
          requestId: Math.random().toString(36).substring(7),
        })
      );
    };

    client.onclose = (event) => {
      console.log("WebSocket Client Closed");
    };

    client.onmessage = (message) => {
      const newData = processMessages({
        message,
        asks,
        bids,
      });

      setAsks(newData.asks);
      setBids(newData.bids);
    };

    return () => {
      client.close();
    };
  }, [baseToken, quoteToken, asks, bids]);

  return (
    <main className="h-full">
      <section>
        <div className="container mx-auto">
          {data && (
            <OrderBookTable
              data={{
                asks,
                bids,
              }}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default OrderbookDisplay;
