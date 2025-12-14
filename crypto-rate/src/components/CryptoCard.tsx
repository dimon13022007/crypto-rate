import type { Coin } from "../types/coin";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

const CryptoCard = ({ coin }: { coin: Coin }) => {
  const change = Number(coin.change);
  const isPositive = change >= 0;

  return (
    <div
      className="
        bg-white rounded-lg px-3 py-2
        border border-gray-100
        shadow-sm
        transition-colors duration-200
        hover:bg-yellow-50
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={coin.iconUrl} className="w-5 h-5" alt={coin.name} />
          <span className="text-sm font-medium text-gray-900">
            {coin.symbol}
          </span>
        </div>

        <span
          className={`
            flex items-center gap-0.5 text-xs font-medium
            ${isPositive ? "text-green-600" : "text-red-600"}
          `}
        >
          {isPositive ? (
            <ArrowTrendingUpIcon className="w-3.5 h-3.5" />
          ) : (
            <ArrowTrendingDownIcon className="w-3.5 h-3.5" />
          )}
          {isPositive && "+"}
          {change.toFixed(2)}%
        </span>
      </div>

      <div className="mt-1">
        <span className="text-sm font-semibold text-gray-800">
          ${Number(coin.price).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CryptoCard;
