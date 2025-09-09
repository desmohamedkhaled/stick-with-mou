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
        // Initialize with comprehensive sample products
        const sampleProducts = [
          // Stickers
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
            is_featured: true,
            rating: 4.8,
            reviews_count: 24
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
            is_featured: true,
            rating: 4.9,
            reviews_count: 18
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
            is_featured: false,
            rating: 4.6,
            reviews_count: 12
          },
          {
            id: 4,
            name: "Space Theme Sticker Collection",
            price: 750,
            original_price: 950,
            category: "stickers",
            category_slug: "stickers",
            description: "Beautiful space-themed stickers featuring planets, stars, and galaxies for your laptop.",
            image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
            stock: 40,
            stock_quantity: 40,
            is_featured: true,
            rating: 4.7,
            reviews_count: 15
          },
          {
            id: 5,
            name: "Wood Grain Laptop Skin",
            price: 1350,
            original_price: null,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Natural wood grain pattern laptop skin that gives your device a warm, organic look.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
            stock: 20,
            stock_quantity: 20,
            is_featured: false,
            rating: 4.5,
            reviews_count: 8
          },
          {
            id: 6,
            name: "RGB Keyboard Skin",
            price: 1100,
            original_price: 1400,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Colorful RGB-themed keyboard skin with vibrant patterns and precise key cutouts.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 35,
            stock_quantity: 35,
            is_featured: true,
            rating: 4.8,
            reviews_count: 22
          },
          {
            id: 7,
            name: "Cat Lover Sticker Pack",
            price: 550,
            original_price: 700,
            category: "stickers",
            category_slug: "stickers",
            description: "Adorable cat-themed stickers perfect for cat lovers and pet enthusiasts.",
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
            stock: 60,
            stock_quantity: 60,
            is_featured: false,
            rating: 4.9,
            reviews_count: 31
          },
          {
            id: 8,
            name: "Carbon Fiber Laptop Skin",
            price: 1450,
            original_price: null,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "High-tech carbon fiber pattern laptop skin for a modern, professional appearance.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            stock: 15,
            stock_quantity: 15,
            is_featured: true,
            rating: 4.7,
            reviews_count: 11
          },
          {
            id: 9,
            name: "Minimalist White Keyboard Skin",
            price: 850,
            original_price: 1050,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Clean white keyboard skin with minimalist design for a fresh, modern look.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 45,
            stock_quantity: 45,
            is_featured: false,
            rating: 4.6,
            reviews_count: 19
          },
          {
            id: 10,
            name: "Nature Sticker Collection",
            price: 680,
            original_price: 850,
            category: "stickers",
            category_slug: "stickers",
            description: "Beautiful nature-themed stickers featuring trees, flowers, and wildlife.",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            stock: 55,
            stock_quantity: 55,
            is_featured: true,
            rating: 4.8,
            reviews_count: 27
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

  const getFeaturedProducts = () => {
    return products.filter(product => product.is_featured);
  };

  const searchProducts = (query) => {
    if (!query) return products;
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
    );
  };

  const getProductsByPriceRange = (minPrice, maxPrice) => {
    return products.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    );
  };

  const getTopRatedProducts = (limit = 5) => {
    return products
      .filter(product => product.rating)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  };

  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  const getRelatedProducts = (productId, limit = 4) => {
    const product = getProductById(productId);
    if (!product) return [];
    
    return products
      .filter(p => p.id !== productId && p.category === product.category)
      .slice(0, limit);
  };

  const resetToSampleData = () => {
    localStorage.removeItem('products');
    loadProducts();
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
    getFeaturedProducts,
    searchProducts,
    getProductsByPriceRange,
    getTopRatedProducts,
    getProductById,
    getRelatedProducts,
    resetToSampleData,
    loadProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
