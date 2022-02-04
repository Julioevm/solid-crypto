import { For } from "solid-js";
import CoinLine, { Coin } from "../CoinLine/CoinLine";
import styles from "./CoinList.module.css";

interface CoinListProps {
  marketData: Coin[];
}

const CoinList = (props: CoinListProps) => {
  return (
    <div class={styles.coin_container}>
      <For each={props.marketData} fallback={<div>No results :(</div>}>
        {(coin) => <CoinLine {...coin} />}
      </For>
    </div>
  );
};

export default CoinList;
