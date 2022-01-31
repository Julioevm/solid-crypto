export interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    high_24h: number;
}

interface CoinLineProps {
    coin: Coin;
}


const CoinLine = (props: CoinLineProps) => {

    return (
        <div>
            <span>{props.coin.name}</span>
        </div>
    )
}

export default CoinLine;