const express = require('express');
const cors = require('cors');
const path = require('path');
const DatabaseService = require('../database/database');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));

// Initialize database
const db = new DatabaseService();

// Connect to database on startup
db.connect().catch(console.error);

// API Routes

// User routes
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await db.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/users/email/:email', async (req, res) => {
  try {
    const user = await db.getUserByEmail(req.params.email);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const result = await db.createUser(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    const result = await db.updateUser(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Product routes
app.get('/api/products', async (req, res) => {
  try {
    const products = await db.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await db.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/products/category/:categoryId', async (req, res) => {
  try {
    const products = await db.getProductsByCategory(req.params.categoryId);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const result = await db.createProduct(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/products/:id', async (req, res) => {
  try {
    const result = await db.updateProduct(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    const result = await db.deleteProduct(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Category routes
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await db.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/categories/:id', async (req, res) => {
  try {
    const category = await db.getCategoryById(req.params.id);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cart routes
app.get('/api/cart/:userId', async (req, res) => {
  try {
    const cartItems = await db.getCartItems(req.params.userId);
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/cart/add', async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const result = await db.addToCart(userId, productId, quantity);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/cart/update', async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const result = await db.updateCartItem(userId, productId, quantity);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/cart/remove', async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const result = await db.removeFromCart(userId, productId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/cart/clear/:userId', async (req, res) => {
  try {
    const result = await db.clearCart(req.params.userId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Order routes
app.get('/api/orders/user/:userId', async (req, res) => {
  try {
    const orders = await db.getOrdersByUserId(req.params.userId);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/orders/:id', async (req, res) => {
  try {
    const order = await db.getOrderById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const result = await db.createOrder(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Review routes
app.post('/api/reviews', async (req, res) => {
  try {
    const result = await db.createReview(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Analytics routes
app.get('/api/analytics/sales', async (req, res) => {
  try {
    const totalSales = await db.getTotalSales();
    res.json({ totalSales });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/analytics/stock', async (req, res) => {
  try {
    const totalStock = await db.getTotalStock();
    res.json({ totalStock });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/analytics/products', async (req, res) => {
  try {
    const productCount = await db.getProductCount();
    res.json({ productCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await db.close();
  process.exit(0);
});
