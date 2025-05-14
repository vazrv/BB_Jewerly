import express from 'express';

import products from "./controllers/products.js"
import pool from "./controllers/db.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

pool.query('SELECT NOW()', (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected successfully');
  }
});

// Маршруты для продуктов
app.get('/products', async (req, res) => {
  try {
    const allProducts = await products.getAllProducts();
    res.json(allProducts);
  } catch (error) {
    console.error('Error in GET /products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const product = await products.getProductById(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error in GET /products/:id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/products', async (req, res) => {
  try {
    const { title, image, price } = req.body;
    if (!title || !image || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newProduct = await products.createProduct({ title, image, price });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error in POST /products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const updatedProduct = await products.updateProduct(
      Number(req.params.id),
      req.body
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error in PUT /products/:id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    const deleted = await products.deleteProduct(Number(req.params.id));
    if (!deleted) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(204).end();
  } catch (error) {
    console.error('Error in DELETE /products/:id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});