import { Component, createResource } from "solid-js";

import styles from "./App.module.css";
import CoinList from "./components/CoinList";
import { Coin } from "./components/CoinLine/CoinLine";

const marketUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const fetchData = async () => (await fetch(marketUrl)).json();

const App: Component = () => {

  const [data] = createResource<Coin[]>(fetchData);


  return (
    <div class={styles.App}>
      <header>
        <h1>Solid Crypto</h1>
      </header>
      <main>
        <input>Search</input>
        {data() ? <CoinList marketData={data()!} /> : <div>Loading...</div>}
      </main>
    </div>
  );
};

export default App;
