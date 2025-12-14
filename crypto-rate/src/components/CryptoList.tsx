import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../api/coinranking";
import type { Coin } from "../types/coin";
import CryptoCard from "./CryptoCard";

const CryptoList = () => {
  const {
    data: coins,
    isLoading,
    error,
  } = useQuery<Coin[]>({
    queryKey: ["coins"],
    queryFn: getCoins,
    staleTime: 10000,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {coins?.map((coin) => (
        <CryptoCard key={coin.uuid} coin={coin} />
      ))}
    </div>
  );
};
export default CryptoList;
