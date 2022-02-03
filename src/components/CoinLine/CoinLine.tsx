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
}

interface CoinLineProps {
  coin: Coin;
}

const CoinLine = (props: Coin) => {
  return (
    <div className={styles.coin_container}>
      <a>
        <div className="coin_info">
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img
                src={props.image}
                alt={props.name}
                width="100%"
                height="100%"
                className={styles.coin_img}
              />
              <h1 className={styles.coin_h1}>{props.name}</h1>
              <p className={styles.coin_symbol}>{props.symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>
                {props.current_price.toLocaleString()}$
              </p>
              <p className={styles.coin_volume}>
                {props.total_volume.toLocaleString()}$
              </p>
              {props.price_change_24h > 0 ? (
                <span className={(styles.coin_percent, styles.red)}>
                  +{props.price_change_24h.toFixed(2)}%
                </span>
              ) : (
                <span className={(styles.coin_percent, styles.green)}>
                  {props.price_change_24h.toFixed(2)}%
                </span>
              )}

              <p className={styles.coin_market_cap}>
                Market cap: {props.market_cap.toLocaleString()}$
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CoinLine;
