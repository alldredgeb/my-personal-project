require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const massive = require('massive');
const port = 3001;
const app = express();


app.use((req, res, next)=>{
	console.log(req.url);
	next();
})

app.use(bodyParser.json());
app.use(cors());
app.use( express.static( `${__dirname}/../build` ) );



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

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
