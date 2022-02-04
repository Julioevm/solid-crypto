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

interface CoinLineProps {
  coin: Coin;
}

const CoinLine = (props: Coin) => {
  return (
    <a tabIndex={0} className={styles.coin_row}>
      <div className={styles.coin}>
        <img src={props.image} alt={props.name} className={styles.coin_img} />
        <p className={styles.coin_name}>{props.name}</p>
        <p className={styles.coin_symbol}>{props.symbol}</p>
      </div>
      <div className={styles.coin_data}>
        <p className={styles.coin_field}>
          {props.current_price.toLocaleString()}$
        </p>
        <p className={styles.coin_field}>
          {props.total_volume.toLocaleString()}$
        </p>
        {props.price_change_24h > 0 ? (
          <p className={(styles.coin_field, styles.red)}>
            +{props.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className={(styles.coin_field, styles.green)}>
            {props.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}

        <p className={styles.coin_field}>
          {props.market_cap.toLocaleString()}$
        </p>
      </div>
    </a>
  );
};

export default CoinLine;
