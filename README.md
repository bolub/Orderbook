# Orderbook Interview Demo

## API

- Orderbook information is fetched from https://api.0x.org/orderbook/v1. The API requires an access token that's stored as env variables

## Data needed to be displayed on frontend for a orderbook

- price
- quantity
- total

```
// price = takerAmount / makerAmount
// quantity === makerAmount
// total = price * makerAmount
```

For testing:
USDC -> USDT
