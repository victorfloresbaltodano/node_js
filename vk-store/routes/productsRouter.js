const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {

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
})

//The specifics methods first, else the method wil not work
router.get('/filter', (req, res) => {
  res.send('Hello, I am a filter');
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  //const id = req.params.id;

  res.json({
    id,
    name: 'product 2',
    price: 5000
  });
})

router.post('/', (req, res) => {
  const body = req.body;
  //const id = req.params.id;

  res.json({
    message: 'created',
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'updated',
    data: body,
    id,
  });
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id,
  });
})

module.exports = router;
