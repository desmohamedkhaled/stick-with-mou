import React, { createContext, useContext, useState, useEffect } from 'react';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Load products from localStorage
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      } else {
        // Initialize with sample products if none exist
        const sampleProducts = [
          {
            id: 1,
            name: "Retro Gaming Sticker Pack",
            price: 650,
            original_price: 850,
            category: "stickers",
            category_slug: "stickers",
            description: "A collection of retro gaming themed stickers for your laptop, featuring classic arcade games and pixel art designs.",
            image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            stock: 50,
            stock_quantity: 50,
            is_featured: true
          },
          {
            id: 2,
            name: "Minimalist Black Laptop Skin",
            price: 1250,
            original_price: null,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Sleek black matte finish laptop skin for MacBook Pro, providing protection while maintaining a professional look.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            stock: 25,
            stock_quantity: 25,
            is_featured: true
          },
          {
            id: 3,
            name: "Gold Accent Keyboard Skin",
            price: 950,
            original_price: 1200,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Premium gold accent keyboard protector with precise cutouts for all keys and touchpad.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 30,
            stock_quantity: 30,
            is_featured: false
          }
        ];
        setProducts(sampleProducts);
        localStorage.setItem('products', JSON.stringify(sampleProducts));
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      const newProduct = {
        ...product,
        id: Date.now(),
        stock: parseInt(product.stock) || 0,
        stock_quantity: parseInt(product.stock) || 0,
        category_slug: product.category,
        primary_image: product.image
      };
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return newProduct;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const updatedProducts = products.map(product =>
        product.id === id ? { ...product, ...updatedProduct } : product
      );
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  };

  const deleteProduct = async (id) => {
    try {
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };

  const getProductsByCategory = (category) => {
    if (!category || category === 'all') return products;
    return products.filter(product => product.category_slug === category);
  };

  const getTotalSales = async () => {
    // Return a static value for demo purposes
    return 12450.99;
  };

  const getTotalStock = () => {
    return products.reduce((total, product) => total + (product.stock_quantity || product.stock || 0), 0);
  };


  const value = {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    getTotalSales,
    getTotalStock,
    loadProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
