const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my server.');
})

app.get('/new-endpoint', (req, res) => {
  res.send('Hello, I am a new end point.');
})

app.get('/products', (req, res) => {
  res.json({
    name: 'product 1',
    price: 1000
  });
})

app.listen(port, () => {
  console.log('Port: ', port);
})
