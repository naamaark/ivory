
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'currency'
const gCurrencies = [
    { 'symbol': 'btc', 'highLimit': null, 'lowLimit:': null, 'highPrecent': null, 'lowPrecent': null, 'notification': 'off' },
    { 'symbol': 'eth', 'highLimit': null, 'lowLimit:': null, 'highPrecent': null, 'lowPrecent': null, 'notification': 'off' },
    { 'symbol': 'bnb', 'highLimit': null, 'lowLimit:': null, 'highPrecent': null, 'lowPrecent': null, 'notification': 'off' },
    { 'symbol': 'xrp', 'highLimit': null, 'lowLimit:': null, 'highPrecent': null, 'lowPrecent': null, 'notification': 'off' },
    { 'symbol': 'ada', 'highLimit': null, 'lowLimit:': null, 'highPrecent': null, 'lowPrecent': null, 'notification': 'off' },
    { 'symbol': 'ltc', 'highLimit': null, 'lowLimit:': null, 'highPrecent': null, 'lowPrecent': null, 'notification': 'off' }
]

export const currencyService = {
    query,
    getById,
    save,
    remove,
    getEmptycurrency
}
window.cs = currencyService;


async function query() {
    const currencies = await storageService.query(STORAGE_KEY)
    if (!currencies || currencies.length === 0) {
        storageService.save('currency', gCurrencies)
        return gCurrencies
    }
    else {
        return currencies
    }
}
function getById(currencyId) {
    return storageService.get(STORAGE_KEY, currencyId)
}
async function remove(symbol) {
    return storageService.remove(STORAGE_KEY, symbol)
}
async function save(symbol) {
    const currency = { "symbol": symbol, 'highLimit': null, 'lowLimit:': null, 'highPrecent': null, 'lowPrecent': null, 'notification': 'off' }
    return storageService.post(STORAGE_KEY, currency)
}

function getEmptycurrency() {
    return {
        symbol: ""
    }
}







