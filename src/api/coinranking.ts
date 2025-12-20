import axios from "axios";
import type { Coin } from "../types/coin";
import type { StatsType } from "../types/stats";

interface CoinsResponse {
  data: {
    coins: Coin[];
  };
}

interface StatsResponse {
  data: StatsType;
}

const USDT_UUID = "yhjMzLPhuIDl";

export const api = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});

export const getCoins = async () => {
  const response = await api.get<CoinsResponse>("/coins", {
    params: {
      referenceCurrencyUuid: USDT_UUID,
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: 10,
    },
  });

  return response.data.data.coins;
};

export const getStats = async () => {
  const response = await api.get<StatsResponse>("/stats");
  return response.data.data;
};
