import Axios from 'axios'

var axios = Axios.create({
    withCredentials: true,
    baseURL: 'https://api.binance.com/api/v3/ticker/24hr'
})

function getInitialData(symbol) {
    try {
        axios.get(`?symbol=${symbol}`).then(res => {
            return {
                "lastPrice": res.lastPrice,
                "priceChange": res.priceChange,
                "volume": res.volume,
                "bid": res.bidPrice,
                "ask": res.askPrice
            }
        })
    } catch (error) {
        console.log('could not get initial data', error);
    }
}

export const dataService = {
    getInitialData
}