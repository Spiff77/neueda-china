const dataInput = [
    {
      "ticker": "AAPL",
      "company_name": "Apple Inc.",
      "current_price": 175.30,
      "price_change_percentage": -0.58,
      "market_cap": 2900000000000,
      "volume": 58000000,
      "sector": "Technology",
      "52_week_high": 190.73,
      "52_week_low": 135.62,
      "dividend_yield": 0.65
    },
    {
      "ticker": "GOOGL",
      "company_name": "Alphabet Inc.",
      "current_price": 134.68,
      "price_change_percentage": 0.35,
      "market_cap": 1700000000000,
      "volume": 32000000,
      "sector": "Communication Services",
      "52_week_high": 141.22,
      "52_week_low": 88.75,
      "dividend_yield": 0.00
    },
    {
      "ticker": "TSLA",
      "company_name": "Tesla, Inc.",
      "current_price": 245.55,
      "price_change_percentage": 1.23,
      "market_cap": 780000000000,
      "volume": 75000000,
      "sector": "Consumer Discretionary",
      "52_week_high": 299.29,
      "52_week_low": 101.81,
      "dividend_yield": 0.00
    },
    {
      "ticker": "MSFT",
      "company_name": "Microsoft Corporation",
      "current_price": 324.75,
      "price_change_percentage": 0.41,
      "market_cap": 2400000000000,
      "volume": 29000000,
      "sector": "Technology",
      "52_week_high": 366.78,
      "52_week_low": 219.13,
      "dividend_yield": 0.89
    }
  ]

/*
We want to transform the data from above like this:
  {
    stock_name: 'AAPL',
    stats: { price: 175.3, market_cap: 2900000000000, volume: 58000000 }
  },
  {
    stock_name: 'GOOGL',
    stats: { price: 134.68, market_cap: 1700000000000, volume: 32000000 }
  },
  {
    stock_name: 'TSLA',
    stats: { price: 245.55, market_cap: 780000000000, volume: 75000000 }
  },
  {
    stock_name: 'MSFT',
    stats: { price: 324.75, market_cap: 2400000000000, volume: 29000000 }
  }

  We also want to calculate the total of some attribute:
  {
  total_price: 880.28,
  total_market_cap: 7780000000000,
  total_volume: 194000000
}


*/
const newoutput = dataInput.map(stock => ({// note the () on the right of the arrow. We want to return an object. If we dont put the (), just {} is the body of the function
    stock_name: stock.ticker,
    stats: {
        price: stock.current_price,
        market_cap: stock.market_cap,
        volume: stock.volume
    }
}))

const totalstats = {
    total_price: dataInput.reduce((acc,stock) => acc + stock.current_price, 0),
    total_market_cap: dataInput.reduce((acc,stock) => acc + stock.market_cap, 0),
    total_volume: dataInput.reduce((acc,stock)=> acc + stock.volume, 0)
} 

console.log(newoutput)
console.log(totalstats)
