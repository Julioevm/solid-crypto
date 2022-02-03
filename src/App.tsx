import {
  Component,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";

import styles from "./App.module.css";
import CoinList from "./components/CoinList";
import { Coin } from "./components/CoinLine/CoinLine";
import { SearchBar } from "./components/SearchBar/SearchBar";

const marketUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const fetchData = async () => (await fetch(marketUrl)).json();

const App: Component = () => {
  const [data] = createResource<Coin[]>(fetchData);
  const [search, setSearch] = createSignal("");
  const filterData = () =>
    data()?.filter((coin) => coin.name.toLowerCase().includes(search()));

  const handleChange = (e: any) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div class={styles.App}>
      <header>
        <h1>Solid Crypto</h1>
      </header>
      <SearchBar handleChange={handleChange} />
      {data() ? <CoinList marketData={filterData()!} /> : <div>Loading...</div>}
    </div>
  );
};

export default App;
