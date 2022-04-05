import React, { useState, useEffect, useRef } from 'react';


function CurrencyDetails({ currency, onDeleteCurrency }) {
    const [lastPrice, setLastPrice] = useState([0, 0])
    const [priceChange, setPriceChange] = useState([0, 0])
    const [volume, setVolume] = useState([0, 0])
    const [bid, setBid] = useState([0, 0])
    const [ask, setAsk] = useState([0, 0])
    const states = [
        [lastPrice, setLastPrice],
        [priceChange, setPriceChange],
        [volume, setVolume],
        [bid, setBid],
        [ask, setAsk]
    ]


    useEffect(
        () => {
            let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${currency.symbol}usdt@ticker`)
            ws.onmessage = (event) => {
                const { c, P, v, b, a } = JSON.parse(event.data)
                let values = [c, P, v, b, a]
                values.forEach((val, idx) => {
                    updateValue(val, states[idx][0], states[idx][1])
                })
            }

            return () => {
                ws.close()
            }
        },
        []
    )

    function updateValue(newVal, currVal, func) {
        newVal = parseFloat(newVal);
        if (newVal !== currVal[1]) {
            func(currVal => [currVal[1], newVal])
        }
    }

    function getValueColor(val) {
        if (val[1] > val[0]) {
            return 'green'
        }
        else if (val[1] < val[0]) {
            return 'red'
        }
        else {
            return ''
        }
    }

    return (
        <tr>
            <td className='table-cell'>
                {currency.symbol.toUpperCase()}
            </td>
            <td className={`table-cell ${getValueColor(lastPrice)}`}>{lastPrice[1]}</td>
            <td className={`table-cell ${getValueColor(priceChange)}`}>{priceChange[1]}</td>
            <td className={`table-cell ${getValueColor(volume)}`}>{volume[1]}</td>
            <td className={`table-cell ${getValueColor(bid)}`}>{bid[1]}</td>
            <td className={`table-cell ${getValueColor(ask)}`}>{ask[1]}</td>
            <td><button onClick={() => { onDeleteCurrency(currency.symbol) }}>delete</button></td>
            <td><button>update</button></td>
        </tr>
    );
}

export default CurrencyDetails;

// className={`table-cell ${((lastPriced < lastPrice) ? "green" : "black")}`}