import { For } from "solid-js";
import CoinLine, { Coin } from "../CoinLine/CoinLine";
import styles from "./CoinList.module.css";

const CoinList = (props: { marketData: Coin[] }) => {
  return (
    <div class={styles.coin_container}>
      <For each={props.marketData} fallback={<div>No results :(</div>}>
        {(coin) => <CoinLine coin={coin} />}
      </For>
    </div>
  );
};

export default CoinList;
