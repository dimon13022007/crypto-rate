import axios from "axios";
import type { StatsType } from "../types/stats";

export const api = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});

export const getCoins = async () => {
  const response = await api.get("/coins", {
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: 10,
    },
  });
  return response.data.data.coins;
};

export const getStats = async (): Promise<StatsType> => {
  const response = await api.get("/stats");
  const data = response.data.data;

  return {
    totalMarketCap: data.totalMarketCap,
    total24hVolume: data.total24hVolume,
    btcDominance: data.btcDominance,
    ethDominance: data.ethDominance,
    totalExchanges: data.totalExchanges,
    totalCoins: data.totalCoins,
  };
};
