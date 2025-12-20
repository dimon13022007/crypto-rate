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

  if (isLoading) return <p>Loading stats...</p>;
  if (error || !stats) return <p>Error loading stats</p>;

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
