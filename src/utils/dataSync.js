// Data synchronization utilities to ensure consistency across all components

/**
 * Normalizes product data to ensure all required properties are present
 * @param {Object} product - The product object to normalize
 * @returns {Object} - Normalized product object
 */
export const normalizeProduct = (product) => {
  if (!product) return null;
  
  return {
    id: product.id,
    name: product.name || 'Unnamed Product',
    price: product.price || 0,
    original_price: product.original_price || null,
    category: product.category || 'uncategorized',
    category_slug: product.category_slug || product.category || 'uncategorized',
    description: product.description || 'No description available',
    image: product.image || product.primary_image || 'https://via.placeholder.com/300x200?text=No+Image',
    primary_image: product.primary_image || product.image || 'https://via.placeholder.com/300x200?text=No+Image',
    stock: product.stock || product.stock_quantity || 0,
    stock_quantity: product.stock_quantity || product.stock || 0,
    rating: product.rating || 4.5,
    reviews_count: product.reviews_count || 0,
    is_featured: product.is_featured || false,
    // Additional properties that might be needed
    short_description: product.short_description || product.description || 'No description available',
    category_name: product.category_name || product.category || 'Uncategorized'
  };
};

/**
 * Normalizes cart item data to ensure consistency
 * @param {Object} cartItem - The cart item object to normalize
 * @returns {Object} - Normalized cart item object
 */
export const normalizeCartItem = (cartItem) => {
  if (!cartItem) return null;
  
  const normalizedProduct = normalizeProduct(cartItem);
  
  return {
    ...normalizedProduct,
    quantity: cartItem.quantity || 1
  };
};

/**
 * Formats price consistently across all components
 * @param {number} price - The price to format
 * @param {string} currency - The currency symbol (default: 'EGP')
 * @returns {string} - Formatted price string
 */
export const formatPrice = (price, currency = 'EGP') => {
  if (typeof price !== 'number') return '0 ' + currency;
  return `${price} ${currency}`;
};

/**
 * Formats category name consistently
 * @param {string} category - The category to format
 * @returns {string} - Formatted category name
 */
export const formatCategory = (category) => {
  if (!category) return 'Uncategorized';
  return category.replace('-', ' ').replace(/_/g, ' ');
};

/**
 * Gets the best available image for a product
 * @param {Object} product - The product object
 * @returns {string} - The best available image URL
 */
export const getProductImage = (product) => {
  if (!product) return 'https://via.placeholder.com/300x200?text=No+Image';
  
  return product.primary_image || 
         product.image || 
         'https://via.placeholder.com/300x200?text=No+Image';
};

/**
 * Gets the best available category for a product
 * @param {Object} product - The product object
 * @returns {string} - The best available category
 */
export const getProductCategory = (product) => {
  if (!product) return 'uncategorized';
  
  return product.category_slug || 
         product.category || 
         'uncategorized';
};

/**
 * Validates if a product has all required properties
 * @param {Object} product - The product to validate
 * @returns {boolean} - True if product is valid
 */
export const isValidProduct = (product) => {
  if (!product) return false;
  
  const requiredFields = ['id', 'name', 'price'];
  return requiredFields.every(field => product[field] !== undefined && product[field] !== null);
};

/**
 * Ensures all products in an array are normalized
 * @param {Array} products - Array of products to normalize
 * @returns {Array} - Array of normalized products
 */
export const normalizeProducts = (products) => {
  if (!Array.isArray(products)) return [];
  
  return products.map(product => normalizeProduct(product)).filter(Boolean);
};

/**
 * Syncs product data between different contexts
 * @param {Object} product - The product to sync
 * @param {Object} updates - Updates to apply
 * @returns {Object} - Synced product
 */
export const syncProductData = (product, updates = {}) => {
  const normalizedProduct = normalizeProduct(product);
  
  return {
    ...normalizedProduct,
    ...updates,
    // Ensure critical fields are always present
    id: updates.id || normalizedProduct.id,
    name: updates.name || normalizedProduct.name,
    price: updates.price !== undefined ? updates.price : normalizedProduct.price
  };
};
