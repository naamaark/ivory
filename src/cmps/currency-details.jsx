import React, { useState, useEffect } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function CurrencyDetails({symbol}) {
    const [price, setPrice] = useState(0)
    const [change, setChange] = useState(0)
    const [total, setTotal] = useState(0)
    const [ask, setAsk] = useState(0);
    const [bid, setBid] = useState(0)
    useEffect(
        () => {
            let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@ticker`)
            ws.onmessage = (event) => {
                let stock = JSON.parse(event.data)
                setPrice(stock.c)
                setChange(stock.p)
                setTotal(stock.v)
                setAsk(stock.l)
                setBid(stock.h)
            }

            return () => {
                ws.close()
            }
        },
        []
    )
    return (
        <TableRow key={symbol}>
            <TableCell component="th" scope="row">
                {symbol}
            </TableCell>
            <TableCell >{price}</TableCell>
            <TableCell >{change}%</TableCell>
            <TableCell >{total}</TableCell>
            <TableCell >{ask}</TableCell>
            <TableCell >{bid}</TableCell>
        </TableRow>
    );
}

export default CurrencyDetails;