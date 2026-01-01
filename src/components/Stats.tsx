import { useQuery } from "@tanstack/react-query";
import { getStats } from "../api/coinranking";
import StatsCard from "./StatsCard";
import { formatCurrency } from "../utils/format";

const Stats = () => {
  const {
    data: stats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
    refetchInterval: 3000,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mb-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-200 dark:bg-gray-700 rounded-xl p-6 h-24 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-center mb-6">
        <p className="text-red-600 dark:text-red-400 font-semibold">
          Ошибка загрузки статистики
        </p>
        <p className="text-red-500 dark:text-red-500 text-sm mt-1">
          {error instanceof Error
            ? error.message
            : "Не удалось загрузить данные"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center mb-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl">
        <StatsCard
          title="Market capitalization"
          value={`$${formatCurrency(stats?.totalMarketCap)}`}
        />
        <StatsCard
          title="Volume per 24 h"
          value={`$${formatCurrency(stats?.total24hVolume)}`}
        />
        <StatsCard
          title="BTC dominance"
          value={`${formatCurrency(stats?.btcDominance.toFixed(2))}%`}
        />
      </div>
    </div>
  );
};

export default Stats;
