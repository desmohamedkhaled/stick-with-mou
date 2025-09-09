const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

class Database {
  constructor() {
    this.db = null;
    this.dbPath = path.join(__dirname, 'stickwithmo.db');
  }

  async init() {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(this.dbPath, (err) => {
        if (err) {
          console.error('Error opening database:', err.message);
          reject(err);
        } else {
          console.log('Connected to SQLite database');
          this.createTables()
            .then(() => this.insertSampleData())
            .then(() => resolve())
            .catch(reject);
        }
      });
    });
  }

  async createTables() {
    return new Promise((resolve, reject) => {
      const schemaPath = path.join(__dirname, 'schema.sql');
      const schema = fs.readFileSync(schemaPath, 'utf8');
      
      this.db.exec(schema, (err) => {
        if (err) {
          console.error('Error creating tables:', err.message);
          reject(err);
        } else {
          console.log('Database tables created successfully');
          resolve();
        }
      });
    });
  }

  async insertSampleData() {
    const sampleData = require('./sample-data.json');
    
    try {
      // Insert categories
      for (const category of sampleData.categories) {
        await this.run(
          `INSERT OR IGNORE INTO categories (id, name, slug, description, image_url, sort_order) 
           VALUES (?, ?, ?, ?, ?, ?)`,
          [category.id, category.name, category.slug, category.description, category.image_url, category.sort_order]
        );
      }

      // Insert users
      for (const user of sampleData.users) {
        await this.run(
          `INSERT OR IGNORE INTO users (id, email, password_hash, name, role, phone, address, city, state, zip_code, country) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [user.id, user.email, user.password_hash, user.name, user.role, user.phone, user.address, user.city, user.state, user.zip_code, user.country]
        );
      }

      // Insert products
      for (const product of sampleData.products) {
        await this.run(
          `INSERT OR IGNORE INTO products (id, name, slug, description, short_description, price, original_price, sku, category_id, stock_quantity, weight, material, color, brand, is_featured) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [product.id, product.name, product.slug, product.description, product.short_description, product.price, product.original_price, product.sku, product.category_id, product.stock_quantity, product.weight, product.material, product.color, product.brand, product.is_featured]
        );
      }

      // Insert product images
      for (const image of sampleData.product_images) {
        await this.run(
          `INSERT OR IGNORE INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
           VALUES (?, ?, ?, ?, ?)`,
          [image.product_id, image.image_url, image.alt_text, image.sort_order, image.is_primary]
        );
      }

      // Insert product reviews
      for (const review of sampleData.product_reviews) {
        await this.run(
          `INSERT OR IGNORE INTO product_reviews (product_id, user_id, rating, title, comment, is_verified_purchase, is_approved) 
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [review.product_id, review.user_id, review.rating, review.title, review.comment, review.is_verified_purchase, review.is_approved]
        );
      }

      // Insert orders
      for (const order of sampleData.orders) {
        await this.run(
          `INSERT OR IGNORE INTO orders (id, order_number, user_id, status, subtotal, tax_amount, shipping_amount, total_amount, payment_method, payment_status, shipping_address) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [order.id, order.order_number, order.user_id, order.status, order.subtotal, order.tax_amount, order.shipping_amount, order.total_amount, order.payment_method, order.payment_status, order.shipping_address]
        );
      }

      // Insert order items
      for (const item of sampleData.order_items) {
        await this.run(
          `INSERT OR IGNORE INTO order_items (order_id, product_id, product_name, product_sku, quantity, price, total_price) 
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [item.order_id, item.product_id, item.product_name, item.product_sku, item.quantity, item.price, item.total_price]
        );
      }

      // Insert coupons
      for (const coupon of sampleData.coupons) {
        await this.run(
          `INSERT OR IGNORE INTO coupons (code, name, description, type, value, minimum_amount, usage_limit, is_active, expires_at) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [coupon.code, coupon.name, coupon.description, coupon.type, coupon.value, coupon.minimum_amount, coupon.usage_limit, coupon.is_active, coupon.expires_at]
        );
      }

      // Insert site settings
      for (const setting of sampleData.site_settings) {
        await this.run(
          `INSERT OR IGNORE INTO site_settings (setting_key, setting_value, description) 
           VALUES (?, ?, ?)`,
          [setting.setting_key, setting.setting_value, setting.description]
        );
      }

      console.log('Sample data inserted successfully');
    } catch (error) {
      console.error('Error inserting sample data:', error);
      throw error;
    }
  }

  run(sql, params = []) {
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

  get(sql, params = []) {
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

  all(sql, params = []) {
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

  close() {
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

module.exports = Database;
