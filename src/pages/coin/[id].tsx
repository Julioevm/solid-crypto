import { useParams } from "solid-app-router";
import { createResource, Show } from "solid-js";
import styles from "./Coin.module.css";

interface MarketData {
  current_price: { usd: number };
}
interface CoinDetail {
  id: string;
  image: { large: string };
  name: string;
  symbol: string;
  market_data: MarketData;
}

const fetchData = async (id: string) =>
  (await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)).json();

const Coin = () => {
  const params = useParams();
  const [coin] = createResource(() => params.id, fetchData);

  return (
    <Show when={coin()} fallback="Loading...">
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img
            src={coin().image.large}
            alt={coin().name}
            className={styles.coin_img}
          />
          <h1 className={styles.coin_name}>{coin().name}</h1>
          <p className={styles.coin_ticker}>{coin().symbol}</p>
          <p className={styles.coin_current}>
            {coin().market_data.current_price.usd.toLocaleString()}$
          </p>
        </div>
      </div>
    </Show>
  );
};

export default Coin;
