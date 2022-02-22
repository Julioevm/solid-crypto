import { Link } from "solid-app-router";
import { Show } from "solid-js";
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
  return (
    <Link href={`/coin/${props.coin.id}`} tabIndex={0} class={styles.coin_row}>
      <div class={styles.coin}>
        <img
          src={props.coin.image}
          alt={props.coin.name}
          class={styles.coin_img}
        />
        <p class={styles.coin_name}>{props.coin.name}</p>
        <p class={(styles.coin_symbol, styles.mobile_hidden)}>
          {props.coin.symbol}
        </p>
      </div>
      <div class={styles.coin_data}>
        <p class={styles.coin_field}>
          {props.coin.current_price.toLocaleString()}$
        </p>
        <p class={styles.mobile_hidden}>
          {props.coin.total_volume.toLocaleString()}$
        </p>
        {
          <Show
            when={props.coin.price_change_24h < 0}
            fallback={
              <p class={(styles.coin_field, styles.green)}>
                +{props.coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            }
          >
            {
              <p class={(styles.coin_field, styles.red)}>
                {props.coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            }
          </Show>
        }

        <p class={styles.mobile_hidden}>
          {props.coin.market_cap.toLocaleString()}$
        </p>
      </div>
    </Link>
  );
};

export default CoinLine;
