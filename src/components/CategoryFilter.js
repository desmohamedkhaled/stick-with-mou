import React from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../contexts/ProductContext';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const { products } = useProducts();
  
  // Get unique categories from products
  const categories = [
    { id: 'all', name: 'All Products', slug: 'all' },
    ...Array.from(new Set(products.map(p => p.category_slug || p.category)))
      .map(slug => {
        const categoryProducts = products.filter(p => (p.category_slug || p.category) === slug);
        return {
          id: slug,
          name: categoryProducts[0]?.category_name || slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
          slug: slug
        };
      })
  ];

  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category.slug
                ? 'bg-brand-red text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryFilter;
