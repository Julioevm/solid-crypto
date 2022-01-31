import { For } from "solid-js";
import CoinLine, { Coin } from "./CoinLine";

interface CoinListProps {
  marketData: Coin[];
}

const CoinList = (props: CoinListProps) => {
  console.log(props.marketData);
  
  return (
    <For each={props.marketData} fallback={<div>Loading...</div>}>
      {(coin) => <CoinLine coin={coin} />}
    </For>
  );
}

export default CoinList;
