const express = require('express');
const productsService = require('./../services/productsService');
const validatorHandler = require('./../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema
} = require('./../schemas/productSchema');



const router = express.Router();
const service = new productsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
})

//The specifics methods first, else the method wil not work
router.get('/filter', (req, res) => {
  res.send('Hello, I am a filter');
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  })

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    //const id = req.params.id;
    const newProduct = await service.create(body);

    res.status(201).json(newProduct);
  })

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'), validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {

      const {
        id
      } = req.params;
      const body = req.body;
      const product = await service.update(id, body);

      res.json(product);
    } catch (error) {
      next(error);
    }

  })

router.delete('/:id', async (req, res) => {
  const {
    id
  } = req.params;
  const r = await service.delete(id);

  res.json(r);
})

module.exports = router;
