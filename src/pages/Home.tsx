import CryptoList from "../components/CryptoList";
import Header from "../components/Header";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <>
      <main className="pt-24 p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        <div className="max-w-7xl mx-auto">
          <Stats />
          <CryptoList />
        </div>
      </main>
    </>
  );
};

export default Home;
