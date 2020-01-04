const express = require('express')
const app = express()
const fetch = require('node-fetch')
require('dotenv').config

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('../index')
})
app.get('/image/:word',async (req,res)=>{
    console.log('request recieved')
    const word = req.params.word
    console.log(word) 
    const api_key = process.env.API_KEY
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=uZq0Rc8EnHMTwuCPUZ82dpE8ffuAWk8r&limit=1`);
    const data = await response.json()
    console.log(data)
    res.json(data)
})
app.get('/randomWord',async (req,res)=>{
    console.log('request recieved')
    const response = await fetch(`https://random-word-api.herokuapp.com/word?key=XFC45RP9`)
    const data = await response.json()
    console.log(data)
    res.json(data)
})
app.listen(3000)