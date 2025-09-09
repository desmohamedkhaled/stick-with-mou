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

  useEffect(() => {
    // Load products from localStorage or initialize with sample data
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      // Initialize with sample products
      const sampleProducts = [
        {
          id: 1,
          name: "Retro Gaming Sticker Pack",
          price: 12.99,
          category: "stickers",
          image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
          description: "A collection of retro gaming themed stickers for your laptop",
          stock: 50
        },
        {
          id: 2,
          name: "Minimalist Black Laptop Skin",
          price: 24.99,
          category: "laptop-skins",
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
          description: "Sleek black matte finish laptop skin for MacBook Pro",
          stock: 25
        },
        {
          id: 3,
          name: "Gold Accent Keyboard Skin",
          price: 18.99,
          category: "keyboard-skins",
          image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
          description: "Premium gold accent keyboard protector",
          stock: 30
        },
        {
          id: 4,
          name: "Nature Photography Stickers",
          price: 9.99,
          category: "stickers",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          description: "Beautiful nature photography stickers set",
          stock: 40
        },
        {
          id: 5,
          name: "Carbon Fiber Laptop Skin",
          price: 29.99,
          category: "laptop-skins",
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
          description: "High-quality carbon fiber texture laptop skin",
          stock: 20
        },
        {
          id: 6,
          name: "RGB Gaming Keyboard Skin",
          price: 22.99,
          category: "keyboard-skins",
          image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=400&h=300&fit=crop",
          description: "Gaming-themed keyboard skin with RGB accents",
          stock: 35
        }
      ];
      setProducts(sampleProducts);
      localStorage.setItem('products', JSON.stringify(sampleProducts));
    }
  }, []);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      stock: parseInt(product.stock) || 0
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    return newProduct;
  };

  const updateProduct = (id, updatedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const getProductsByCategory = (category) => {
    if (!category || category === 'all') return products;
    return products.filter(product => product.category === category);
  };

  const getTotalSales = () => {
    // Mock sales data - in real app this would come from orders
    return 12450.99;
  };

  const getTotalStock = () => {
    return products.reduce((total, product) => total + product.stock, 0);
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
