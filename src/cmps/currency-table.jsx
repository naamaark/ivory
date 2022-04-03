import React, { useState, useEffect } from 'react';
import CurrencyDetails from '../cmps/currency-details'
import { currencyService } from '../services/currency.service.js'

function CurrencyTable() {
    const [currencies, setCurrencies] = useState([])
    const [symbol, setSymbol] = useState('')


    useEffect(() => {
        currencyService.query().then(res => {
            setCurrencies(res)
        });
    }, [])

    async function onDeleteCurrency(symbol) {
        await currencyService.remove(symbol)
        currencyService.query().then(res => {
            setCurrencies(res)
        });
    }

    function onEditCurrency() {

    }

    async function onAddCurrency() {
        console.log(symbol);
        await currencyService.save(symbol)
        currencyService.query().then(res => {
            setCurrencies(res)
        });
        setSymbol('')
    }

    function handleChange(ev) {
        const value = ev.target.value;
        setSymbol(value);
    }

    return (
        <div className="table-container flex column justify-center">
            <input className='add-input' onChange={handleChange} value={symbol}></input>
            <button className='add-btn' onClick={onAddCurrency}>Add</button>
            <table className='currency-table'>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Total</th>
                        <th>ASK</th>
                        <th>BID</th>
                    </tr>
                </thead>
                <tbody>
                    {currencies.map(s => {
                        return <CurrencyDetails currency={s} onDeleteCurrency={onDeleteCurrency}></CurrencyDetails>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CurrencyTable;