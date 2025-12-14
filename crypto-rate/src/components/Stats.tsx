import { useQuery } from "@tanstack/react-query";
import { getStats } from "../api/coinranking";
import StatsCard from "./StatsCard";
import type { StatsType } from "../types/stats";
import { formatNumber } from "../utils/format";

const Stats = () => {
  const { data, isLoading, error } = useQuery<StatsType>({
    queryKey: ["stats"],
    queryFn: getStats,
    refetchInterval: 3000,
  });

  if (isLoading) return <p>Loading stats...</p>;
  if (error || !data) return <p>Error loading stats</p>;

  return (
    <div className="flex justify-center mb-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl">
        <StatsCard
          title="Market capitalization"
          value={`$${formatNumber(data?.totalMarketCap)}`}
        />
        <StatsCard
          title="Volume per 24 h"
          value={`$${formatNumber(data?.total24hVolume)}`}
        />
        <StatsCard
          title="BTC dominance"
          value={`${formatNumber(data?.btcDominance.toFixed(2))}%`}
        />
      </div>
    </div>
  );
};

export default Stats;
