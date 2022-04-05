const axios = require('axios')

async function getInitialData() {
    const url = `https://api-pub.bitfinex.com/v2/tickers?symbols=ALL`
    try {
        const { data } = await axios.get(url)
        return data

    } catch (error) {
        console.log('could not get initial data', error);
    }
}

module.exports={
    getInitialData
}

