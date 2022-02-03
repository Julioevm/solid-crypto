import { For } from "solid-js";
import CoinLine, { Coin } from "./CoinLine/CoinLine";

interface CoinListProps {
  marketData: Coin[];
}

const CoinList = (props: CoinListProps) => {
  return (
    <For each={props.marketData} fallback={<div>No results :(</div>}>
      {(coin) => <CoinLine {...coin} />}
    </For>
  );
};

export default CoinList;
