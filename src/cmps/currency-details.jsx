import React, { useState, useEffect, useRef } from 'react';
import { dataService } from '../services/data.api.service';



function CurrencyDetails({ symbol }) {
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
            let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}usdt@ticker`)
            ws.onmessage = (event) => {
                const { c, P, v, h, l } = JSON.parse(event.data)
                let values = [c, P, v, h, l]
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

    return (
        <tr>
            <td component="th" scope="row">
                {symbol}
            </td>
            <td >now: {lastPrice[1]}, previous: {lastPrice[0]}</td>
            <td >now: {priceChange[1]}</td>
            <td >now: {volume[1]}</td>
            <td >now: {bid[1]}</td>
            <td >now: {ask[1]}</td>
        </tr>
    );
}

export default CurrencyDetails;

// className={`table-cell ${((lastPriced < lastPrice) ? "green" : "black")}`}