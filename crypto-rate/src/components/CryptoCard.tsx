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
        bg-white
        rounded-xl p-4
        border border-gray-200
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={coin.iconUrl}
            alt={coin.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-gray-900 font-semibold">{coin.name}</span>
            <span className="text-gray-500 text-sm">{coin.symbol}</span>
          </div>
        </div>

        <div
          className={`flex items-center gap-1 text-sm font-semibold ${
            isPositive ? "text-green-600" : "text-red-600"
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

      <div className="mt-3 text-lg font-bold text-gray-900">
        ${Number(coin.price).toLocaleString()}
      </div>
    </div>
  );
};

export default CryptoCard;
