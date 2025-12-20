import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header
      className="
        fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md text-black py-3 border-b border-gray-200/70 z-50 "
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
        <div className="bg-yellow-400/90 p-2 rounded-full inline-flex items-center justify-center">
          <CurrencyDollarIcon className="w-8 h-8 text-black" />
        </div>

        <div className="flex flex-col items-start leading-tight">
          <h1 className="text-xl font-bold">Crypto Rate</h1>
          <h2 className="text-gray-600 text-xs">In real time</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
