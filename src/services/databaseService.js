// Database service for React frontend
// This service provides methods to interact with the database

class DatabaseService {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Database service error:', error);
      throw error;
    }
  }

  // User operations
  async createUser(userData) {
    return await this.request('/users', {
      method: 'POST',
      body: userData,
    });
  }

  async getUserByEmail(email) {
    return await this.request(`/users/email/${email}`);
  }

  async getUserById(id) {
    return await this.request(`/users/${id}`);
  }

  async updateUser(id, userData) {
    return await this.request(`/users/${id}`, {
      method: 'PUT',
      body: userData,
    });
  }

  // Product operations
  async getAllProducts() {
    return await this.request('/products');
  }

  async getProductById(id) {
    return await this.request(`/products/${id}`);
  }

  async getProductsByCategory(categoryId) {
    return await this.request(`/products/category/${categoryId}`);
  }

  async createProduct(productData) {
    return await this.request('/products', {
      method: 'POST',
      body: productData,
    });
  }

  async updateProduct(id, productData) {
    return await this.request(`/products/${id}`, {
      method: 'PUT',
      body: productData,
    });
  }

  async deleteProduct(id) {
    return await this.request(`/products/${id}`, {
      method: 'DELETE',
    });
  }

  // Category operations
  async getAllCategories() {
    return await this.request('/categories');
  }

  async getCategoryById(id) {
    return await this.request(`/categories/${id}`);
  }

  // Cart operations
  async getCartItems(userId) {
    return await this.request(`/cart/${userId}`);
  }

  async addToCart(userId, productId, quantity = 1) {
    return await this.request('/cart/add', {
      method: 'POST',
      body: { userId, productId, quantity },
    });
  }

  async updateCartItem(userId, productId, quantity) {
    return await this.request('/cart/update', {
      method: 'PUT',
      body: { userId, productId, quantity },
    });
  }

  async removeFromCart(userId, productId) {
    return await this.request('/cart/remove', {
      method: 'DELETE',
      body: { userId, productId },
    });
  }

  async clearCart(userId) {
    return await this.request(`/cart/clear/${userId}`, {
      method: 'DELETE',
    });
  }

  // Order operations
  async createOrder(orderData) {
    return await this.request('/orders', {
      method: 'POST',
      body: orderData,
    });
  }

  async getOrdersByUserId(userId) {
    return await this.request(`/orders/user/${userId}`);
  }

  async getOrderById(id) {
    return await this.request(`/orders/${id}`);
  }

  // Review operations
  async createReview(reviewData) {
    return await this.request('/reviews', {
      method: 'POST',
      body: reviewData,
    });
  }

  // Analytics operations
  async getTotalSales() {
    return await this.request('/analytics/sales');
  }

  async getTotalStock() {
    return await this.request('/analytics/stock');
  }

  async getProductCount() {
    return await this.request('/analytics/products');
  }

  // Fallback to localStorage for development
  async getProductsFallback() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      return JSON.parse(storedProducts);
    }
    return [];
  }

  async saveProductsFallback(products) {
    localStorage.setItem('products', JSON.stringify(products));
    return products;
  }

  async getCartItemsFallback(userId) {
    const storedCart = localStorage.getItem(`cart_${userId}`) || localStorage.getItem('cart');
    if (storedCart) {
      return JSON.parse(storedCart);
    }
    return [];
  }

  async saveCartItemsFallback(userId, cartItems) {
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));
    localStorage.setItem('cart', JSON.stringify(cartItems));
    return cartItems;
  }
}

// Create a singleton instance
const databaseService = new DatabaseService();

export default databaseService;
