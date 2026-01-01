import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../api/coinranking";
import CryptoCard from "./CryptoCard";
import SearchBar from "./SearchBar";
import CoinModal from "./CoinModal";
import { useState, useMemo } from "react";
import type { Coin } from "../types/coin";

const CryptoList = () => {
  const [search, setSearch] = useState("");
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

  const {
    data: coins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["coins"],
    queryFn: getCoins,
    refetchInterval: 30000,
  });

  const filteredCoins = useMemo(() => {
    if (!coins) return [];
    return coins.filter((coin) =>
      `${coin.name} ${coin.symbol}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [coins, search]);

  if (isLoading) {
    return (
      <>
        <SearchBar value={search} onChange={setSearch} />
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SearchBar value={search} onChange={setSearch} />
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
          <p className="text-red-600 dark:text-red-400 font-semibold">
            Ошибка загрузки данных
          </p>
          <p className="text-red-500 dark:text-red-500 text-sm mt-2">
            {error instanceof Error
              ? error.message
              : "Не удалось загрузить криптовалюты"}
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />

      {filteredCoins.length === 0 ? (
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 font-semibold">
            Ничего не найдено
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Попробуйте изменить поисковый запрос
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCoins.map((coin) => (
              <CryptoCard
                key={coin.uuid}
                coin={coin}
                onClick={() => setSelectedCoin(coin)}
              />
            ))}
          </div>
          {selectedCoin && (
            <CoinModal
              coin={selectedCoin}
              isOpen={!!selectedCoin}
              onClose={() => setSelectedCoin(null)}
            />
          )}
        </>
      )}
    </>
  );
};

export default CryptoList;
