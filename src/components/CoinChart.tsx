import { useQuery } from "@tanstack/react-query";
import { getCoinHistory } from "../api/coinranking";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { Coin } from "../types/coin";
import { useTheme } from "../contexts/ThemeContext";

interface CoinChartProps {
  coin: Coin;
  timePeriod?: string;
}

const CoinChart = ({ coin, timePeriod = "24h" }: CoinChartProps) => {
  const { theme } = useTheme();
  const {
    data: history,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["coinHistory", coin.uuid, timePeriod],
    queryFn: () => getCoinHistory(coin.uuid, timePeriod),
  });

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error || !history || history.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
        <p>Не удалось загрузить график</p>
      </div>
    );
  }

  const chartData = history.map((item) => ({
    time: new Date(item.timestamp * 1000).toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    price: parseFloat(item.price),
  }));

  const formatPrice = (value: number | undefined) => {
    if (value === undefined) return "";
    return `$${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    })}`;
  };

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            className="stroke-gray-300 dark:stroke-gray-700"
          />
          <XAxis
            dataKey="time"
            className="text-xs fill-gray-600 dark:fill-gray-400"
          />
          <YAxis
            className="text-xs fill-gray-600 dark:fill-gray-400"
            tickFormatter={(value) => `$${value.toFixed(2)}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor:
                theme === "dark"
                  ? "rgba(31, 41, 55, 0.95)"
                  : "rgba(255, 255, 255, 0.95)",
              border:
                theme === "dark" ? "1px solid #4b5563" : "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              color: theme === "dark" ? "#f3f4f6" : "#111827",
            }}
            formatter={(value) => formatPrice(value as number | undefined)}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#facc15"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinChart;
