import { Link, useRoutes } from "solid-app-router";
import { lazy } from "solid-js";
import styles from "./CoinLine.module.css";
export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
}

const CoinLine = (props: { coin: Coin }) => {
  const { coin } = props;

  return (
    <Link href={`/coin/${coin.id}`} tabIndex={0} className={styles.coin_row}>
      <div className={styles.coin}>
        <img src={coin.image} alt={coin.name} className={styles.coin_img} />
        <p className={styles.coin_name}>{coin.name}</p>
        <p className={(styles.coin_symbol, styles.mobile_hidden)}>
          {coin.symbol}
        </p>
      </div>
      <div className={styles.coin_data}>
        <p className={styles.coin_field}>
          {coin.current_price.toLocaleString()}$
        </p>
        <p className={styles.mobile_hidden}>
          {coin.total_volume.toLocaleString()}$
        </p>
        {coin.price_change_24h > 0 ? (
          <p className={(styles.coin_field, styles.red)}>
            +{coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className={(styles.coin_field, styles.green)}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}

        <p className={styles.mobile_hidden}>
          {coin.market_cap.toLocaleString()}$
        </p>
      </div>
    </Link>
  );
};

export default CoinLine;
