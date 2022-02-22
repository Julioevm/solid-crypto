import { useParams } from "solid-app-router";
import { createResource, Show } from "solid-js";
import styles from "./Coin.module.css";

interface MarketData {
  current_price: { usd: number };
}
interface CoinDetail {
  id: string;
  image: { small: string; large: string };
  name: string;
  symbol: string;
  market_data: MarketData;
}

const fetchData = async (id: string) =>
  (await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)).json();

const Coin = () => {
  const params = useParams();
  const [coin] = createResource<CoinDetail>(() => fetchData(params.id));

  return (
    <Show when={coin()} fallback="Loading...">
      <div class={styles.coin_container}>
        <div class={styles.coin_header}>
          <img
            src={coin().image.small}
            alt={coin().name}
            class={styles.coin_image}
          />
          <h1 class={styles.coin_name}>{coin().name}</h1>
          <p>{coin().symbol}</p>
        </div>
        <p class={styles.coin_current}>
          {coin().market_data.current_price.usd.toLocaleString()}$
        </p>
      </div>
    </Show>
  );
};

export default Coin;
