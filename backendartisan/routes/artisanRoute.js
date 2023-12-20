// Routes/artisanRoute.js
const express = require('express');
const artisanRoute = express.Router();
const {
  registerArtisan,
  signInArtisan,
  getOneArtisanById,
  addProductByArtisan,
  getProductsByArtisanId,
  deleteProductByArtisan, // Add the import for the new method
} = require('../controllers/artisanController');

artisanRoute.post('/register', registerArtisan);
artisanRoute.post('/signin', signInArtisan);
artisanRoute.get('/:id', getOneArtisanById);
artisanRoute.post('/:id/products', addProductByArtisan);
artisanRoute.get('/:id/products', getProductsByArtisanId);
artisanRoute.delete('/:id/products/:productId', deleteProductByArtisan); // Add the new route for deleting a product

module.exports = artisanRoute;
