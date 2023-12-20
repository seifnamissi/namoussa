// Controllers/artisanController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Artisan, Product } = require('../models/Artisan');

const registerArtisan = async (request, response) => {
  // ... (your existing registration code)
};

const signInArtisan = async (request, response) => {
  const { email, password } = request.body;

  try {
    const artisan = await Artisan.findOne({ where: { email } });

    if (!artisan) {
      return response.status(401).json({ msg: 'Invalid email or password' });
    }

    const isPasswordValid = await artisan.comparePassword(password);

    if (!isPasswordValid) {
      return response.status(401).json({ msg: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ artisanId: artisan.id }, 'your-secret-key', { expiresIn: '1h' });

    response.status(200).json({ token, msg: 'Sign-in successful' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ msg: 'Error during sign-in' });
  }
};

const getOneArtisanById = async (request, response) => {
  const artisanId = request.params.id;

  try {
    const artisan = await Artisan.findByPk(artisanId);

    if (!artisan) {
      return response.status(404).json({ msg: 'Artisan not found' });
    }

    response.status(200).json({ artisan });
  } catch (error) {
    console.error(error);
    response.status(500).json({ msg: 'Error during retrieval of artisan' });
  }
};

const addProductByArtisan = async (request, response) => {
  const artisanId = request.params.id;
  const { name, category, region, price, description } = request.body;

  try {
    const artisan = await Artisan.findByPk(artisanId);

    if (!artisan) {
      return response.status(404).json({ msg: 'Artisan not found' });
    }

    const product = await Product.create({
      name,
      category,
      region,
      price,
      description,
      artisanId,
    });

    response.status(201).json({ product, msg: 'Product added successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ msg: 'Error during product addition' });
  }
};

const getProductsByArtisanId = async (request, response) => {
  const artisanId = request.params.id;

  try {
    const products = await Product.findAll({ where: { artisanId } });

    response.status(200).json({ products });
  } catch (error) {
    console.error(error);
    response.status(500).json({ msg: 'Error during retrieval of products' });
  }
};

const deleteProductByArtisan = async (request, response) => {
  const artisanId = request.params.id;
  const productId = request.params.productId;

  try {
    const artisan = await Artisan.findByPk(artisanId);
    if (!artisan) {
      return response.status(404).json({ msg: 'Artisan not found' });
    }

    const product = await Product.findOne({ where: { id: productId, artisanId } });
    if (!product) {
      return response.status(404).json({ msg: 'Product not found or does not belong to the artisan' });
    }

    await product.destroy();

    response.status(200).json({ msg: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ msg: 'Error during product deletion' });
  }
};

module.exports = {
  registerArtisan,
  signInArtisan,
  getOneArtisanById,
  addProductByArtisan,
  getProductsByArtisanId,
  deleteProductByArtisan,
};

  
