import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm text-black py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 ">
        <div className="bg-yellow-400 p-2 rounded-full inline-flex items-center justify-center">
          <CurrencyDollarIcon className="w-8 h-8 text-black" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold">Crypto Rate</h1>
          <h2 className="text-gray-700 text-xs">In real time</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
