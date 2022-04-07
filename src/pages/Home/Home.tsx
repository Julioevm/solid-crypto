import { createResource, createSignal, Show } from "solid-js";
import CoinList from "../../components/CoinList/CoinList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Coin } from "../../components/CoinLine/CoinLine";
import { favList } from "../../App";
import Slider from "../../components/Slider/Slider";

const marketUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const fetchData = async () => (await fetch(marketUrl)).json();

const Home = () => {
  const [data] = createResource<Coin[]>(fetchData);
  const [search, setSearch] = createSignal("");
  const [isFavOnly, setIsFavOnly] = createSignal(false);

  const filterData = (isFavOnly: boolean) => {
    const favs = JSON.parse(favList()!) || [];

    const filterData = isFavOnly
      ? data()?.filter((coin) => favs.includes(coin.id))
      : data() || [];

    return filterData?.filter((coin) =>
      coin.name.toLowerCase().includes(search())
    );
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleClick = () => setIsFavOnly(!isFavOnly());

  return (
    <>
      <header>
        <h1>Solid Crypto</h1>
      </header>

      <SearchBar handleChange={handleChange} />
      <Slider handleClick={handleClick} />
      <Show when={filterData(isFavOnly())} fallback={<div>Loading...</div>}>
        {(data) => <CoinList marketData={data} />}
      </Show>
    </>
  );
};

export default Home;
