import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const { getProductsByCategory, searchProducts } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'stickers', label: 'Stickers' },
    { value: 'laptop-skins', label: 'Laptop Skins' },
    { value: 'keyboard-skins', label: 'Keyboard Skins' }
  ];

  // Get products based on search or category
  let filteredProducts = searchQuery 
    ? searchProducts(searchQuery)
    : getProductsByCategory(selectedCategory);

  // Filter by price range
  filteredProducts = filteredProducts.filter(product => 
    product.price >= priceRange.min && product.price <= priceRange.max
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Product Store
          </h1>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary">
            Discover our complete collection of laptop accessories
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative max-w-md mx-auto">
            <motion.input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text rounded-lg focus:outline-none focus:ring-2 focus:ring-stiletto focus:border-transparent"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <motion.button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Filters and Sorting */}
        <motion.div 
          className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="text-sm font-medium text-gray-700 dark:text-dark-text">Category:</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.value
                        ? 'bg-stiletto text-white'
                        : 'bg-gray-200 dark:bg-dark-border text-gray-700 dark:text-dark-text hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="text-sm font-medium text-gray-700 dark:text-dark-text">Price Range:</label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  placeholder="From"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({...priceRange, min: parseInt(e.target.value) || 0})}
                  className="w-24 px-3 py-2 border border-gray-300 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stiletto focus:border-transparent"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="To"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value) || 5000})}
                  className="w-24 px-3 py-2 border border-gray-300 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stiletto focus:border-transparent"
                />
                <span className="text-sm text-gray-500">EGP</span>
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700 dark:text-dark-text">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stiletto focus:border-transparent"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 dark:text-dark-text-secondary">
            Showing {sortedProducts.length} products
            {selectedCategory !== 'all' && (
              <span> in {categories.find(c => c.value === selectedCategory)?.label}</span>
            )}
            {searchQuery && (
              <span> for "{searchQuery}"</span>
            )}
          </p>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {sortedProducts.length > 0 ? (
            <motion.div 
              key="products"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {sortedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="no-products"
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="text-gray-400 mb-4"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text mb-2">No products found</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                Try adjusting your filters or browse all products.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button (for future pagination) */}
        {sortedProducts.length > 0 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-william dark:bg-dark-accent text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-finch dark:hover:bg-dark-accent-hover transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Products
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Shop;
