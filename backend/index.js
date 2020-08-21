const fs = require('fs')
const cors = require('cors')
const express = require('express')
const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    app.use(cors())
    next()
})

function base64_encode(file) {
    var img = fs.readFileSync(file)
    return new Buffer(img).toString('base64')
}

const games = {
    "title": "Remnant: From the Ashes",
    "img": base64_encode('./examples/fifa2020.jpg'),
    "price": 75.49,
}

app.get('/', (req,res) => {
    console.log('chamou')
    res.json(games)
})

const PORT = process.env.PORT || 5000

app.listen(PORT)