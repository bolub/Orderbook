import { getOrderbookData } from "@/API/orderbook";
import { OrderBookTable } from "@/components/TokenSelector/OrderBookTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const OrderbookDisplay = () => {
  const router = useRouter();

  const { baseToken, quoteToken } = router.query as {
    tokens: string;
    baseToken: string;
    quoteToken: string;
  };

  const { data } = useQuery({
    queryKey: ["orderbook", baseToken, quoteToken],
    queryFn: () => {
      return getOrderbookData({
        baseToken,
        quoteToken,
      });
    },
    enabled: Boolean(baseToken) && Boolean(quoteToken),
  });

  useEffect(() => {
    const client = new WebSocket("wss://api.0x.org/orderbook/v1");

    client.onopen = () => {
      console.log("WebSocket Client Connected");

      client.send(
        JSON.stringify({
          type: "subscribe",
          channel: "orders",
          // generate protected random uuid
          requestId: Math.random().toString(36).substring(7),
        })
      );
    };

    client.onclose = (event) => {
      console.log("WebSocket Client Closed");
    };

    client.onmessage = (message) => {
      processMessages(message);
    };

    return () => {
      client.close();
    };
  }, [baseToken, quoteToken]);

  const processMessages = (message: any) => {
    const newData = JSON.parse(message.data) as {
      channel: string;
      type: string;
      requestId: string;
      payload: any;
    };

    // console.log(newData);

    function updateData(existingData: any, newData: any) {
      // Update asks records
      if (newData.length > 0) {
        for (const record of newData) {
          if (record.metaData.state === "ADDED") {
            existingData.asks.records.push(record);
          } else {
            const index = existingData.asks.records.findIndex(
              (r: any) => r.metaData.orderHash === record.metaData.orderHash
            );
            if (index !== -1) {
              existingData.asks.records.splice(index, 1, record);
            }
          }
        }
        existingData.asks.total = existingData.asks.records.length;
      }

      return existingData;
    }
  };

  return (
    <main className="h-full">
      <section>
        <div className="container mx-auto">
          {data && <OrderBookTable data={data} />}
        </div>
      </section>
    </main>
  );
};

export default OrderbookDisplay;
