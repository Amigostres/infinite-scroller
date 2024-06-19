const port = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()


const app = express()

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/api', (req, res) => {
    
})


app.listen(port, () => {
    console.log(`server is live on port ${8000}`);
})
