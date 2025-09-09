const sqlite3 = require('sqlite3').verbose();
const path = require('path');

class DatabaseService {
  constructor() {
    this.db = null;
    this.dbPath = path.join(__dirname, 'stickwithmo.db');
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(this.dbPath, (err) => {
        if (err) {
          console.error('Error opening database:', err.message);
          reject(err);
        } else {
          console.log('Connected to SQLite database');
          resolve();
        }
      });
    });
  }

  async run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, changes: this.changes });
        }
      });
    });
  }

  async get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  async all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // User operations
  async createUser(userData) {
    const { email, password_hash, name, role = 'user', phone, address, city, state, zip_code, country = 'USA' } = userData;
    return await this.run(
      `INSERT INTO users (email, password_hash, name, role, phone, address, city, state, zip_code, country) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [email, password_hash, name, role, phone, address, city, state, zip_code, country]
    );
  }

  async getUserByEmail(email) {
    return await this.get('SELECT * FROM users WHERE email = ?', [email]);
  }

  async getUserById(id) {
    return await this.get('SELECT * FROM users WHERE id = ?', [id]);
  }

  async updateUser(id, userData) {
    const fields = Object.keys(userData).map(key => `${key} = ?`).join(', ');
    const values = Object.values(userData);
    return await this.run(`UPDATE users SET ${fields} WHERE id = ?`, [...values, id]);
  }

  // Product operations
  async getAllProducts() {
    return await this.all(`
      SELECT p.*, c.name as category_name, c.slug as category_slug,
             (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
      FROM products p 
      JOIN categories c ON p.category_id = c.id 
      WHERE p.is_active = 1 
      ORDER BY p.created_at DESC
    `);
  }

  async getProductById(id) {
    const product = await this.get(`
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM products p 
      JOIN categories c ON p.category_id = c.id 
      WHERE p.id = ? AND p.is_active = 1
    `, [id]);

    if (product) {
      product.images = await this.all('SELECT * FROM product_images WHERE product_id = ? ORDER BY sort_order', [id]);
      product.reviews = await this.all(`
        SELECT r.*, u.name as user_name 
        FROM product_reviews r 
        JOIN users u ON r.user_id = u.id 
        WHERE r.product_id = ? AND r.is_approved = 1 
        ORDER BY r.created_at DESC
      `, [id]);
    }

    return product;
  }

  async getProductsByCategory(categoryId) {
    return await this.all(`
      SELECT p.*, c.name as category_name, c.slug as category_slug,
             (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
      FROM products p 
      JOIN categories c ON p.category_id = c.id 
      WHERE p.category_id = ? AND p.is_active = 1 
      ORDER BY p.created_at DESC
    `, [categoryId]);
  }

  async createProduct(productData) {
    const { name, slug, description, short_description, price, original_price, sku, category_id, stock_quantity, weight, material, color, brand, is_featured = false } = productData;
    return await this.run(
      `INSERT INTO products (name, slug, description, short_description, price, original_price, sku, category_id, stock_quantity, weight, material, color, brand, is_featured) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, slug, description, short_description, price, original_price, sku, category_id, stock_quantity, weight, material, color, brand, is_featured]
    );
  }

  async updateProduct(id, productData) {
    const fields = Object.keys(productData).map(key => `${key} = ?`).join(', ');
    const values = Object.values(productData);
    return await this.run(`UPDATE products SET ${fields} WHERE id = ?`, [...values, id]);
  }

  async deleteProduct(id) {
    return await this.run('UPDATE products SET is_active = 0 WHERE id = ?', [id]);
  }

  // Category operations
  async getAllCategories() {
    return await this.all('SELECT * FROM categories WHERE is_active = 1 ORDER BY sort_order');
  }

  async getCategoryById(id) {
    return await this.get('SELECT * FROM categories WHERE id = ? AND is_active = 1', [id]);
  }

  // Cart operations
  async getCartItems(userId) {
    return await this.all(`
      SELECT ci.*, p.name, p.price, p.slug, p.stock_quantity,
             (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1 LIMIT 1) as image
      FROM cart_items ci 
      JOIN products p ON ci.product_id = p.id 
      WHERE ci.user_id = ? AND p.is_active = 1
    `, [userId]);
  }

  async addToCart(userId, productId, quantity = 1) {
    const existingItem = await this.get('SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?', [userId, productId]);
    
    if (existingItem) {
      return await this.run(
        'UPDATE cart_items SET quantity = quantity + ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ? AND product_id = ?',
        [quantity, userId, productId]
      );
    } else {
      const product = await this.getProductById(productId);
      return await this.run(
        'INSERT INTO cart_items (user_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
        [userId, productId, quantity, product.price]
      );
    }
  }

  async updateCartItem(userId, productId, quantity) {
    if (quantity <= 0) {
      return await this.removeFromCart(userId, productId);
    }
    return await this.run(
      'UPDATE cart_items SET quantity = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ? AND product_id = ?',
      [quantity, userId, productId]
    );
  }

  async removeFromCart(userId, productId) {
    return await this.run('DELETE FROM cart_items WHERE user_id = ? AND product_id = ?', [userId, productId]);
  }

  async clearCart(userId) {
    return await this.run('DELETE FROM cart_items WHERE user_id = ?', [userId]);
  }

  // Order operations
  async createOrder(orderData) {
    const { user_id, subtotal, tax_amount, shipping_amount, discount_amount, total_amount, payment_method, shipping_address, billing_address } = orderData;
    const order_number = `SWM-${Date.now()}`;
    
    const result = await this.run(
      `INSERT INTO orders (order_number, user_id, subtotal, tax_amount, shipping_amount, discount_amount, total_amount, payment_method, shipping_address, billing_address) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [order_number, user_id, subtotal, tax_amount, shipping_amount, discount_amount, total_amount, payment_method, shipping_address, billing_address]
    );

    return { ...result, order_number };
  }

  async addOrderItem(orderId, itemData) {
    const { product_id, product_name, product_sku, quantity, price, total_price } = itemData;
    return await this.run(
      'INSERT INTO order_items (order_id, product_id, product_name, product_sku, quantity, price, total_price) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [orderId, product_id, product_name, product_sku, quantity, price, total_price]
    );
  }

  async getOrdersByUserId(userId) {
    return await this.all(`
      SELECT o.*, 
             (SELECT COUNT(*) FROM order_items WHERE order_id = o.id) as item_count
      FROM orders o 
      WHERE o.user_id = ? 
      ORDER BY o.created_at DESC
    `, [userId]);
  }

  async getOrderById(id) {
    const order = await this.get('SELECT * FROM orders WHERE id = ?', [id]);
    if (order) {
      order.items = await this.all('SELECT * FROM order_items WHERE order_id = ?', [id]);
    }
    return order;
  }

  // Review operations
  async createReview(reviewData) {
    const { product_id, user_id, rating, title, comment, is_verified_purchase = false } = reviewData;
    return await this.run(
      'INSERT INTO product_reviews (product_id, user_id, rating, title, comment, is_verified_purchase) VALUES (?, ?, ?, ?, ?, ?)',
      [product_id, user_id, rating, title, comment, is_verified_purchase]
    );
  }

  // Analytics operations
  async getTotalSales() {
    const result = await this.get('SELECT SUM(total_amount) as total FROM orders WHERE payment_status = "paid"');
    return result.total || 0;
  }

  async getTotalStock() {
    const result = await this.get('SELECT SUM(stock_quantity) as total FROM products WHERE is_active = 1');
    return result.total || 0;
  }

  async getProductCount() {
    const result = await this.get('SELECT COUNT(*) as count FROM products WHERE is_active = 1');
    return result.count || 0;
  }

  async close() {
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Database connection closed');
          resolve();
        }
      });
    });
  }
}

module.exports = DatabaseService;
