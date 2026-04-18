import React, { createContext, useContext, useState, useEffect } from 'react';
import { normalizeProduct, normalizeProducts } from '../utils/dataSync';

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
        const parsedProducts = JSON.parse(storedProducts);
        setProducts(normalizeProducts(parsedProducts));
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
            is_featured: false,
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
            is_featured: false,
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
            is_featured: false,
            rating: 4.8,
            reviews_count: 27
          },
          {
            id: 11,
            name: "Gaming RGB Laptop Skin",
            price: 1650,
            original_price: 2000,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "High-tech gaming laptop skin with RGB lighting effects and gamer aesthetics.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            stock: 18,
            stock_quantity: 18,
            is_featured: false,
            rating: 4.9,
            reviews_count: 33
          },
          {
            id: 12,
            name: "Anime Character Sticker Pack",
            price: 720,
            original_price: 900,
            category: "stickers",
            category_slug: "stickers",
            description: "Popular anime character stickers for anime fans and collectors.",
            image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            stock: 42,
            stock_quantity: 42,
            is_featured: false,
            rating: 4.7,
            reviews_count: 19
          },
          {
            id: 13,
            name: "Marble Pattern Keyboard Skin",
            price: 1150,
            original_price: 1400,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Elegant marble pattern keyboard skin for a luxurious look.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 28,
            stock_quantity: 28,
            is_featured: false,
            rating: 4.6,
            reviews_count: 14
          },
          {
            id: 14,
            name: "Vintage Travel Sticker Set",
            price: 580,
            original_price: 750,
            category: "stickers",
            category_slug: "stickers",
            description: "Vintage travel-themed stickers featuring maps, compasses, and landmarks.",
            image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
            stock: 65,
            stock_quantity: 65,
            is_featured: false,
            rating: 4.5,
            reviews_count: 21
          },
          {
            id: 15,
            name: "Leather Texture Laptop Skin",
            price: 1750,
            original_price: null,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Premium leather texture laptop skin for a sophisticated appearance.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            stock: 12,
            stock_quantity: 12,
            is_featured: false,
            rating: 4.8,
            reviews_count: 8
          },
          {
            id: 16,
            name: "Neon Glow Keyboard Skin",
            price: 1300,
            original_price: 1600,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Vibrant neon glow keyboard skin with electric colors and patterns.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 35,
            stock_quantity: 35,
            is_featured: false,
            rating: 4.7,
            reviews_count: 16
          },
          {
            id: 17,
            name: "Music Lover Sticker Pack",
            price: 650,
            original_price: 800,
            category: "stickers",
            category_slug: "stickers",
            description: "Music-themed stickers featuring instruments, notes, and musical symbols.",
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
            stock: 48,
            stock_quantity: 48,
            is_featured: false,
            rating: 4.9,
            reviews_count: 25
          },
          {
            id: 18,
            name: "Geometric Pattern Laptop Skin",
            price: 1400,
            original_price: 1700,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Modern geometric pattern laptop skin with clean lines and contemporary design.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            stock: 22,
            stock_quantity: 22,
            is_featured: false,
            rating: 4.6,
            reviews_count: 12
          },
          {
            id: 19,
            name: "Minimalist Keyboard Skin",
            price: 900,
            original_price: 1100,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Clean minimalist keyboard skin with subtle patterns and professional look.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 40,
            stock_quantity: 40,
            is_featured: false,
            rating: 4.8,
            reviews_count: 18
          },
          {
            id: 20,
            name: "Ocean Wave Sticker Collection",
            price: 620,
            original_price: 780,
            category: "stickers",
            category_slug: "stickers",
            description: "Beautiful ocean-themed stickers with waves, sea creatures, and beach vibes.",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            stock: 52,
            stock_quantity: 52,
            is_featured: false,
            rating: 4.7,
            reviews_count: 23
          },
          {
            id: 21,
            name: "Premium Gaming Laptop Skin",
            price: 1850,
            original_price: 2200,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "High-performance gaming laptop skin with RGB lighting effects and premium materials.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            stock: 15,
            stock_quantity: 15,
            is_featured: true,
            rating: 4.9,
            reviews_count: 45
          },
          {
            id: 22,
            name: "Vintage Camera Sticker Pack",
            price: 580,
            original_price: 720,
            category: "stickers",
            category_slug: "stickers",
            description: "Retro camera and photography themed stickers for photography enthusiasts.",
            image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            stock: 38,
            stock_quantity: 38,
            is_featured: false,
            rating: 4.8,
            reviews_count: 29
          },
          {
            id: 23,
            name: "Rose Gold Keyboard Skin",
            price: 1200,
            original_price: 1500,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Elegant rose gold keyboard skin with luxurious finish and precise cutouts.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 25,
            stock_quantity: 25,
            is_featured: true,
            rating: 4.9,
            reviews_count: 37
          },
          {
            id: 24,
            name: "Abstract Art Laptop Skin",
            price: 1550,
            original_price: 1800,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Modern abstract art design laptop skin with vibrant colors and unique patterns.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            stock: 20,
            stock_quantity: 20,
            is_featured: false,
            rating: 4.8,
            reviews_count: 31
          },
          {
            id: 25,
            name: "Coffee Lover Sticker Set",
            price: 550,
            original_price: 680,
            category: "stickers",
            category_slug: "stickers",
            description: "Perfect stickers for coffee enthusiasts featuring coffee cups, beans, and cafe vibes.",
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
            stock: 65,
            stock_quantity: 65,
            is_featured: true,
            rating: 4.9,
            reviews_count: 42
          },
          {
            id: 26,
            name: "Stealth Black Keyboard Skin",
            price: 950,
            original_price: 1150,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Sleek black keyboard skin with matte finish for a professional, stealthy look.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 40,
            stock_quantity: 40,
            is_featured: false,
            rating: 4.7,
            reviews_count: 26
          },
          {
            id: 27,
            name: "Mountain Landscape Laptop Skin",
            price: 1650,
            original_price: 1950,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Breathtaking mountain landscape laptop skin with detailed nature photography.",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            stock: 18,
            stock_quantity: 18,
            is_featured: true,
            rating: 4.9,
            reviews_count: 38
          },
          {
            id: 28,
            name: "Tech Geek Sticker Collection",
            price: 680,
            original_price: 850,
            category: "stickers",
            category_slug: "stickers",
            description: "Technology-themed stickers featuring coding, programming, and tech symbols.",
            image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            stock: 48,
            stock_quantity: 48,
            is_featured: true,
            rating: 4.8,
            reviews_count: 33
          },
          {
            id: 29,
            name: "Purple Haze Keyboard Skin",
            price: 1100,
            original_price: 1350,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Vibrant purple gradient keyboard skin with psychedelic patterns and colors.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 32,
            stock_quantity: 32,
            is_featured: false,
            rating: 4.6,
            reviews_count: 19
          },
          {
            id: 30,
            name: "Minimalist Line Art Laptop Skin",
            price: 1450,
            original_price: 1700,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Clean minimalist line art design laptop skin with simple, elegant patterns.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            stock: 28,
            stock_quantity: 28,
            is_featured: true,
            rating: 4.9,
            reviews_count: 41
          },
          {
            id: 31,
            name: "Vintage Travel Sticker Pack",
            price: 620,
            original_price: 780,
            category: "stickers",
            category_slug: "stickers",
            description: "Classic travel-themed stickers with vintage maps, compasses, and adventure symbols.",
            image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
            stock: 55,
            stock_quantity: 55,
            is_featured: false,
            rating: 4.8,
            reviews_count: 35
          },
          {
            id: 32,
            name: "Neon Cyberpunk Keyboard Skin",
            price: 1350,
            original_price: 1650,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Futuristic cyberpunk keyboard skin with neon colors and digital patterns.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 22,
            stock_quantity: 22,
            is_featured: false,
            rating: 4.7,
            reviews_count: 24
          },
          {
            id: 33,
            name: "Botanical Garden Laptop Skin",
            price: 1750,
            original_price: 2050,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Beautiful botanical garden laptop skin with detailed plant illustrations and nature scenes.",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            stock: 16,
            stock_quantity: 16,
            is_featured: true,
            rating: 4.9,
            reviews_count: 44
          },
          {
            id: 34,
            name: "Retro Wave Sticker Collection",
            price: 650,
            original_price: 800,
            category: "stickers",
            category_slug: "stickers",
            description: "80s retro wave aesthetic stickers with neon colors and synthwave vibes.",
            image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            stock: 42,
            stock_quantity: 42,
            is_featured: false,
            rating: 4.8,
            reviews_count: 28
          },
          {
            id: 35,
            name: "Crystal Clear Keyboard Skin",
            price: 1050,
            original_price: 1300,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Transparent crystal clear keyboard skin that shows your laptop's original design.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 35,
            stock_quantity: 35,
            is_featured: false,
            rating: 4.6,
            reviews_count: 21
          },
          {
            id: 36,
            name: "Galaxy Starfield Laptop Skin",
            price: 1850,
            original_price: 2200,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Stunning galaxy starfield laptop skin with deep space colors and cosmic patterns.",
            image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
            stock: 14,
            stock_quantity: 14,
            is_featured: true,
            rating: 4.9,
            reviews_count: 47
          },
          {
            id: 37,
            name: "Foodie Sticker Pack",
            price: 580,
            original_price: 720,
            category: "stickers",
            category_slug: "stickers",
            description: "Delicious food-themed stickers featuring pizza, burgers, sushi, and more culinary delights.",
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
            stock: 58,
            stock_quantity: 58,
            is_featured: false,
            rating: 4.7,
            reviews_count: 32
          },
          {
            id: 38,
            name: "Gradient Rainbow Keyboard Skin",
            price: 1250,
            original_price: 1550,
            category: "keyboard-skins",
            category_slug: "keyboard-skins",
            description: "Beautiful rainbow gradient keyboard skin with smooth color transitions.",
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            stock: 30,
            stock_quantity: 30,
            is_featured: false,
            rating: 4.8,
            reviews_count: 25
          },
          {
            id: 39,
            name: "Urban Street Art Laptop Skin",
            price: 1550,
            original_price: 1850,
            category: "laptop-skins",
            category_slug: "laptop-skins",
            description: "Edgy urban street art laptop skin with graffiti-style designs and bold colors.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            stock: 19,
            stock_quantity: 19,
            is_featured: true,
            rating: 4.9,
            reviews_count: 39
          },
          {
            id: 40,
            name: "Zen Meditation Sticker Set",
            price: 520,
            original_price: 650,
            category: "stickers",
            category_slug: "stickers",
            description: "Peaceful zen and meditation themed stickers with calming symbols and patterns.",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            primary_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            stock: 45,
            stock_quantity: 45,
            is_featured: false,
            rating: 4.8,
            reviews_count: 27
          }
        ];
        const normalizedSampleProducts = normalizeProducts(sampleProducts);
        setProducts(normalizedSampleProducts);
        localStorage.setItem('products', JSON.stringify(normalizedSampleProducts));
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
      const newProduct = normalizeProduct({
        ...product,
        id: Date.now(),
        stock: parseInt(product.stock) || 0,
        stock_quantity: parseInt(product.stock) || 0,
        category_slug: product.category,
        primary_image: product.image,
        rating: product.rating || 4.5,
        reviews_count: product.reviews_count || 0,
        is_featured: product.is_featured || false,
        original_price: product.original_price || null
      });
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
      const updatedProducts = products.map(product => {
        if (product.id === id) {
          return {
            ...product,
            ...updatedProduct,
            stock: parseInt(updatedProduct.stock) || product.stock,
            stock_quantity: parseInt(updatedProduct.stock) || product.stock_quantity,
            category_slug: updatedProduct.category || product.category_slug,
            primary_image: updatedProduct.image || product.primary_image,
            rating: updatedProduct.rating || product.rating,
            reviews_count: updatedProduct.reviews_count || product.reviews_count,
            is_featured: updatedProduct.is_featured !== undefined ? updatedProduct.is_featured : product.is_featured,
            original_price: updatedProduct.original_price !== undefined ? updatedProduct.original_price : product.original_price
          };
        }
        return product;
      });
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
