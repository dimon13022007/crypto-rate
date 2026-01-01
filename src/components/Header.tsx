import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-black dark:text-white py-3 border-b border-gray-200/70 dark:border-gray-700/70 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400/90 dark:bg-yellow-500/90 p-2 rounded-full inline-flex items-center justify-center shadow-lg">
            <CurrencyDollarIcon className="w-8 h-8 text-black dark:text-white" />
          </div>

          <div className="flex flex-col items-start leading-tight">
            <h1 className="text-xl font-bold text-black dark:text-white">
              Crypto Rate
            </h1>
            <h2 className="text-gray-600 dark:text-gray-400 text-xs">
              In real time
            </h2>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
