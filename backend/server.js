const port = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/api', async (req, res) => {
    console.log('api use requested');
    const count = 1
    const options = {
        method: "GET",
        url: `https://api.unsplash.com/photos/random/?client_id=${process.env.UNPLASH_API_KEY}&count=${count}`
    }


    try {
        console.log('trying to find data');
        const response = await axios.request(options);
        console.log('data sent!');
        res.json(response.data); // Send only the data to the client
    } catch (e) {
        console.log(e);
    }
})



app.listen(port, () => {
    console.log(`server is live on port ${8000}`);
})
