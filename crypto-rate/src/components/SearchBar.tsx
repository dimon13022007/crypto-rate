import type { SearchBarProps } from "../types/search";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="mb-6 w-full">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

        <input
          type="text"
          placeholder="Search coin..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            pl-10
            pr-4
            py-3
            rounded-xl
            border border-gray-300
            bg-white
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-yellow-300
            focus:border-yellow-300
          "
        />
      </div>
    </div>
  );
};

export default SearchBar;
