require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const massive = require('massive');
const port = 3001;
const app = express();


app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then( (db) => {
  app.set('db', db);
}).catch(err=>console.log('db', err));

app.get('/api/getClothes/:category', (req, res) => {
    // res.status(200).send(nameOfFile)
    console.log(`we hit getClothes ${req.params.category}`)
})

app.get('/api/getClothingDetail/:id', (req, res) => {
  // res.status(200).send(nameOfFile)
  console.log(`we hit getClothingDetail ${req.params.id}`)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})