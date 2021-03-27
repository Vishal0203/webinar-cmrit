const express = require('express');
const router = express.Router();

const fruits = ['apple', 'kiwi', 'banana', 'strawberry'];

router.get('/fruits', (req, res) => {
  res.json(fruits);
})

router.post('/fruits', (req, res) => {
  const { newFruit } = req.body;
  fruits.push(newFruit);
  res.json(fruits);
})

module.exports = router;
