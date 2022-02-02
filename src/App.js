import "./App.css";
import './myscript';
import axios from "axios";
import { useState, useEffect } from "react";
import RenderCoin from "./components/RenderCoins";

function App() {
  const [data, setData] = useState([]); // array state
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("The URL is invalid or some other error occured");
      });
  }, []);

  const filteredData = data.filter( (coin) => // array that contains filtered coins
  coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const submitHandler = (event) => {
    setSearch(event.target.value);
  };

  console.log(search);

  return (
    <div className="page">
      <div className="setting">
        <h2 className="title">Search a Crypto</h2>
        {/* <form>
          <input className="input" type="text" onChange={submitHandler} />
        </form> */}
        <div class="box">
        <form name="search">
            <input type="text" className="input" name="txt" 
            onmouseout="document.search.txt.value = ''" onChange={submitHandler}/>
            <i class="fas fa-search"/>
        </form>
        </div>
      </div>

      {filteredData.map((coin) => {
        return (
          <RenderCoin
            key={coin.id}
            coinImg={coin.image}
            coinName={coin.name}
            coinSymbol={coin.symbol}
            coinPrice={coin.current_price}
            coinVolume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
