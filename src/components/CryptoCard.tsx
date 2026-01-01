import type { Coin } from "../types/coin";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import { formatCurrency } from "../utils/format";

interface CryptoCardProps {
  coin: Coin;
  onClick: () => void;
}

const CryptoCard = ({ coin, onClick }: CryptoCardProps) => {
  const change = Number(coin.change);
  const isPositive = change >= 0;

  return (
    <button
      onClick={onClick}
      className="w-full bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-left group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={coin.iconUrl}
              alt={`${coin.name} icon`}
              className="w-12 h-12 rounded-full group-hover:scale-110 transition-transform"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900 dark:text-white font-semibold text-lg">
              {coin.name}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm uppercase">
              {coin.symbol}
            </span>
          </div>
        </div>

        <div
          className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg ${
            isPositive
              ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
              : "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
          }`}
        >
          {isPositive ? (
            <ArrowTrendingUpIcon className="w-4 h-4" />
          ) : (
            <ArrowTrendingDownIcon className="w-4 h-4" />
          )}
          {isPositive && "+"}
          {change.toFixed(2)}%
        </div>
      </div>

      <div className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
        ${formatCurrency(coin.price)}
      </div>
    </button>
  );
};

export default CryptoCard;
