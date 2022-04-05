const express = require('express')
const cors = require('cors')
const path = require('path')
const expressSession = require('express-session')
const dataService = require('./services/data.api.service')

const app = express()
const http = require('http').createServer(app)

const session = expressSession({
    secret: 'coding is amazing',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

app.use(express.json())
app.use(session)
app.use(express.static('public'));

app.get('/data', async (req, res) => {
    try {
        const currencies = await dataService.getInitialData()
        res.send(currencies)
    } catch (err) {
        // logger.error('Failed to query recipes', err)
        console.log('error', err);
        res.status(500).send({ err: 'Failed to get currencies' })
    }
})


// const logger = require('./services/logger.service')
const port = process.env.PORT || 3030
http.listen(port, () => {
    console.log('Server is running on port: ' + port)
})