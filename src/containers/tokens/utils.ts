import { OrderBook, RecordType } from "@/entities/orderbook";

type EventData = {
  channel: string;
  type: string;
  requestId: string;
  payload: RecordType[];
};

export const processMessages = ({
  message,
  asks,
  bids,
}: {
  message: any;
  asks: OrderBook["asks"];
  bids: OrderBook["bids"];
}) => {
  const newData = JSON.parse(message.data) as EventData;

  function updateData(
    newData: EventData,
    existingData: OrderBook["asks"] | OrderBook["bids"]
  ) {
    let duplicatedExistingData = { ...existingData };

    if (newData.payload.length > 0) {
      for (const record of newData.payload) {
        if (record.metaData.state === "ADDED") {
          duplicatedExistingData.records.push(record);
        } else {
          const index = duplicatedExistingData.records.findIndex(
            (r: any) => r.metaData.orderHash === record.metaData.orderHash
          );
          if (index !== -1) {
            duplicatedExistingData.records.splice(index, 1, record);
          }
        }
      }
      duplicatedExistingData.total = duplicatedExistingData.records.length;
    }

    return duplicatedExistingData;
  }

  return {
    asks: updateData(newData, asks),
    bids: updateData(newData, bids),
  };
};
