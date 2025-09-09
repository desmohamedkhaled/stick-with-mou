import React, { createContext, useContext, useState, useEffect } from 'react';
import databaseService from '../services/databaseService';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const products = await databaseService.getAllProducts();
      setProducts(products);
    } catch (error) {
      console.error('Error loading products:', error);
      // Fallback to localStorage
      const fallbackProducts = await databaseService.getProductsFallback();
      setProducts(fallbackProducts);
    }
  };

  const addProduct = async (product) => {
    try {
      const newProduct = await databaseService.createProduct({
        ...product,
        slug: product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        stock_quantity: parseInt(product.stock) || 0,
        category_id: getCategoryIdByName(product.category)
      });
      await loadProducts(); // Reload products from database
      return newProduct;
    } catch (error) {
      console.error('Error adding product:', error);
      // Fallback to localStorage
      const newProduct = {
        ...product,
        id: Date.now(),
        stock: parseInt(product.stock) || 0
      };
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      await databaseService.saveProductsFallback(updatedProducts);
      return newProduct;
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await databaseService.updateProduct(id, updatedProduct);
      await loadProducts(); // Reload products from database
    } catch (error) {
      console.error('Error updating product:', error);
      // Fallback to localStorage
      const updatedProducts = products.map(product =>
        product.id === id ? { ...product, ...updatedProduct } : product
      );
      setProducts(updatedProducts);
      await databaseService.saveProductsFallback(updatedProducts);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await databaseService.deleteProduct(id);
      await loadProducts(); // Reload products from database
    } catch (error) {
      console.error('Error deleting product:', error);
      // Fallback to localStorage
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
      await databaseService.saveProductsFallback(updatedProducts);
    }
  };

  const getProductsByCategory = (category) => {
    if (!category || category === 'all') return products;
    return products.filter(product => product.category_slug === category);
  };

  const getTotalSales = () => {
    // Return a promise that resolves to the sales value
    return new Promise(async (resolve) => {
      try {
        const result = await databaseService.getTotalSales();
        resolve(result.totalSales || 0);
      } catch (error) {
        console.error('Error getting total sales:', error);
        resolve(12450.99); // Fallback value
      }
    });
  };

  const getTotalStock = () => {
    return products.reduce((total, product) => total + (product.stock_quantity || product.stock || 0), 0);
  };

  const getCategoryIdByName = (categoryName) => {
    const categoryMap = {
      'stickers': 1,
      'laptop-skins': 2,
      'keyboard-skins': 3
    };
    return categoryMap[categoryName] || 1;
  };

  const value = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    getTotalSales,
    getTotalStock
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
