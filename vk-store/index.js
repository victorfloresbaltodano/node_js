const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my server.');
})

app.get('/new-endpoint', (req, res) => {
  res.send('Hello, I am a new end point.');
})

app.get('/products', (req, res) => {

  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for(let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
  /* res.json([
    {
      name: 'product 1',
      price: 1000
    },
    {
      name: 'product 2',
      price: 5000
    }
  ]); */
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  //const id = req.params.id;

  res.json({
    id,
    name: 'product 2',
    price: 5000
  });
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('Without parameters');
  }

})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId
  });
})

app.listen(port, () => {
  console.log('Port: ', port);
})
