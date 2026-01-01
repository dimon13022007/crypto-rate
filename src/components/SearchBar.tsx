import type { SearchBarProps } from "../types/search";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="mb-6 w-full">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />

        <input
          type="text"
          placeholder="Search coin..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Поиск криптовалюты"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500 focus:border-yellow-400 dark:focus:border-yellow-500 transition-colors"
        />
      </div>
    </div>
  );
};

export default SearchBar;
