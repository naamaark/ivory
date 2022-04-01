import React, { useState, useEffect } from 'react';
import CurrencyDetails from '../cmps/currency-details';

function Homepage() {
    const symbols = ['btc', 'eth', 'bnb', 'xrp', 'ada', 'ltc']
    return (
        <div>
            <table>
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
                    {symbols.map(s => {
                        return <CurrencyDetails symbol={s}></CurrencyDetails>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Homepage;