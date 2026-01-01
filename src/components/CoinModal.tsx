import { XMarkIcon } from "@heroicons/react/24/solid";
import CoinChart from "./CoinChart";
import type { Coin } from "../types/coin";
import { useState } from "react";
import { formatCurrency } from "../utils/format";

interface CoinModalProps {
  coin: Coin;
  isOpen: boolean;
  onClose: () => void;
}

const CoinModal = ({ coin, isOpen, onClose }: CoinModalProps) => {
  const [timePeriod, setTimePeriod] = useState("24h");

  if (!isOpen) return null;

  const timePeriods = [
    { value: "24h", label: "24ч" },
    { value: "7d", label: "7д" },
    { value: "30d", label: "30д" },
    { value: "3m", label: "3м" },
    { value: "1y", label: "1г" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-4">
            <img
              src={coin.iconUrl}
              alt={`${coin.name} icon`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {coin.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 uppercase">
                {coin.symbol}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Закрыть"
          >
            <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              ${formatCurrency(coin.price)}
            </div>
            <div
              className={`text-lg font-semibold ${
                Number(coin.change) >= 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {Number(coin.change) >= 0 && "+"}
              {Number(coin.change).toFixed(2)}%
            </div>
          </div>

          <div className="mb-4 flex gap-2 flex-wrap">
            {timePeriods.map((period) => (
              <button
                key={period.value}
                onClick={() => setTimePeriod(period.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  timePeriod === period.value
                    ? "bg-yellow-400 dark:bg-yellow-500 text-black dark:text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
            <CoinChart coin={coin} timePeriod={timePeriod} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinModal;
