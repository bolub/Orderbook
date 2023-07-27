import { RecordType } from "@/entities/orderbook";

export const formatPrice = (arg: number): string => {
  return arg.toLocaleString("en", {
    useGrouping: true,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatNumber = (arg: number): string => {
  return new Intl.NumberFormat("en-US").format(arg);
};

export const parseMerchantData = (records: RecordType[]) => {
  const parsedData = [];

  for (const record of records) {
    const makerAmount = parseFloat(record.order.makerAmount);
    const takerAmount = parseFloat(record.order.takerAmount);
    const remainingFillableTakerAmount = Number(
      record.metaData.remainingFillableTakerAmount
    );

    const price = takerAmount / makerAmount;
    const quantity = remainingFillableTakerAmount / makerAmount;
    const total = remainingFillableTakerAmount;

    const parsedRecord = {
      price,
      quantity,
      total,
    };

    parsedData.push(parsedRecord);
  }

  return parsedData.sort((a, b) => a.price - b.price);
};
