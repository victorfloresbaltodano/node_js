const express = require('express');
const productsService = require('./../services/productsService');

const router = express.Router();
const service = new productsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
})

//The specifics methods first, else the method wil not work
router.get('/filter', (req, res) => {
  res.send('Hello, I am a filter');
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
})

router.post('/', (req, res) => {
  const body = req.body;
  //const id = req.params.id;
  const newProduct = service.create(body);

  res.status(201).json(newProduct);
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);

  res.json(product);
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const r = service.delete(id);

  res.json(r);
})

module.exports = router;
