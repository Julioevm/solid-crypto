import { useParams } from "solid-app-router";
import { createResource, Show } from "solid-js";
import Chart from "./Chart";
import "./styles.css";

interface Currency {
  usd: number;
}
interface MarketData {
  current_price: Currency;
  market_cap: Currency;
  price_change_percentage_24h: number;
}
interface CoinDetail {
  id: string;
  image: { small: string; large: string };
  name: string;
  symbol: string;
  market_data: MarketData;
}

interface CoinTimeline {
  prices: Array<{ epoch: number; price: number }>;
}

const fetchData = async (id: string) =>
  (await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)).json();

const fetchTimelineData = async (id: string) =>
  (
    await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=1622794024&to=1654337235`
    )
  ).json();

  const Coin = () => {
    const params = useParams();
    const [coin] = createResource<CoinDetail>(() => fetchData(params.id));
    const [timeline] = createResource<CoinTimeline>(() =>
      fetchTimelineData(params.id)
    );
    const price_change = (coin: CoinDetail) =>
      coin.market_data.price_change_percentage_24h ?? 0;

    return (
      <>
        <Show when={coin()} fallback="Loading...">
          {(coin) => (
            <div class="coin_container">
              <div class={"coin_header"}>
                <div class="coin_main_info">
                  <img
                    src={coin.image.small}
                    alt={coin.name}
                    class={"coin_image"}
                  />
                  <h1 class={"coin_name"}>{coin.name}</h1>
                  <p class={"coin_ticker"}>({coin.symbol})</p>
                </div>

                <div class="coin_value">
                  <div class={"coin_current"}>
                    {coin.market_data.current_price.usd.toLocaleString()}$
                  </div>
                  <div
                    classList={{
                      green: price_change(coin) > 0,
                      red: price_change(coin) < 0,
                    }}
                  >
                    {price_change(coin).toFixed(2)}%
                  </div>
                </div>
              </div>

              <div>
                <span>Market Cap</span>{" "}
                <span>{coin.market_data.market_cap.usd.toLocaleString()}$</span>
              </div>
            </div>
          )}
        </Show>
        <Show when={timeline()} fallback="Loading...">
          {(timeline) => <Chart data={timeline.prices} />}
        </Show>
      </>
    );
  };

export default Coin;
