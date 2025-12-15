import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../api/coinranking";
import type { Coin } from "../types/coin";
import CryptoCard from "./CryptoCard";
import SearchBar from "./SearchBar";
import { useState, useMemo } from "react";

const CryptoList = () => {
  const [search, setSearch] = useState("");

  const {
    data: coins,
    isLoading,
    error,
  } = useQuery<Coin[]>({
    queryKey: ["coins"],
    queryFn: getCoins,
    staleTime: 10000,
  });

  const filteredCoins = useMemo(() => {
    if (!coins) return [];
    return coins.filter((coin) =>
      `${coin.name} ${coin.symbol}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [coins, search]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />

      <div className="grid grid-cols-1 gap-4">
        {filteredCoins.map((coin) => (
          <CryptoCard key={coin.uuid} coin={coin} />
        ))}
      </div>
    </>
  );
};

export default CryptoList;
