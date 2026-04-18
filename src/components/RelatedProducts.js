import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const RelatedProducts = ({ products, currentProductId, title = "Related Products" }) => {
  // Filter out current product and limit to 4 products
  const relatedProducts = products
    .filter(product => product.id !== currentProductId)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-dark-text-secondary">
            You might also like these products
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {relatedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedProducts;
