import CryptoList from "../components/CryptoList";
import Header from "../components/Header";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <>
      <main className="pt-24 p-6">
        <Header />
        <Stats />
        <CryptoList />
      </main>
    </>
  );
};

export default Home;
