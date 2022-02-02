import './Coin.css';
import React from "react";
console.log('called');

const RenderCoin = ({coinImg, coinName, coinSymbol, coinPrice, coinVolume, priceChange, marketcap}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='item'>
                    <img src={coinImg} alt='image of crypto'/>
                    <h2>{coinName}</h2>
                    <p className='coin-symbol'>{coinSymbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${coinPrice.toLocaleString()}</p>
                    <p className='coin-volume'>${coinVolume.toLocaleString()}</p>
                    {priceChange< 0 ? (
                        <p className="coin-percenet negative">{priceChange.toFixed(2)}%</p>
                    
                    )
                    : (<p className="coin-percenet positive">{priceChange.toFixed(2)}%</p>)
                    }
                    <p className="coin-marketcap">Market cap: ${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}

export default RenderCoin;


