# Orderbook Interview Demo

## API

- Orderbook information is fetched from https://api.0x.org/orderbook/v1. The API requires an access token that's stored as env variables
- Token data is fetched from https://tokenlists.org -> http://tokens.coingecko.com/uniswap/all.json

## Data needed to be displayed on frontend for a orderbook

- Price
- Quantity
- Total

For testing:
USDC -> USDT

## CALCULATIONS

To calculate the price, quantity, and total for an orderbook, you can use the information provided in the documents.

Price: The price of an order is calculated by dividing the makerAmount by the takerAmount. This can be seen in the example order configuration:
"makerAmount": "100000000",
"takerAmount": "10000000",
In this example, the price would be 10, as 100000000 divided by 10000000 equals 10.

Quantity: The quantity of an order is represented by the makerAmount or takerAmount, depending on the perspective. In the example order configuration, the makerAmount is 100000000, which represents the quantity of the maker's tokens being offered.

Total: The total is the product of the price and quantity. In the example order configuration, the total would be 1000000000, as the price is 10 and the quantity is 100000000.
