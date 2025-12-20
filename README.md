# Crypto Rate React App

A real-time cryptocurrency tracking application.  
Users can view current prices, 24h changes, market capitalization, 24h trading volume, and BTC/ETH dominance. It also includes a search for coins and the ability to view charts for selected cryptocurrencies.

---

## Technologies Used

- **React** — for building the user interface
- **TypeScript** — adds strong typing to the code
- **Vite** — modern build and development tool
- **Tailwind CSS** — for fast and responsive styling
- **React Query (@tanstack/react-query)** — for managing API requests and caching
- **Axios** — for making HTTP requests
- **Heroicons** — modern SVG icon set
- **Coinranking API** — source of cryptocurrency data

---

## Component Structure

- **Header** — site header with title and basic info
- **Stats / StatsCard** — market statistics block
- **CryptoList / CryptoCard** — list of cryptocurrencies with price, change, and icons
- **SearchBar** — cryptocurrency search input
- **CoinChart** — chart for the selected cryptocurrency
- **App / Home** — root component and main page

---

## Features

- Real-time data updates using React Query
- Responsive design for all devices
- Search and filter cryptocurrencies
- Beautiful icons and price change visualization
- Large numbers formatted for readability (trillions, billions, millions)
