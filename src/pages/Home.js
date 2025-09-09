import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-brand-red">Stick</span> With{' '}
                <span className="text-brand-gold">Mo</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Premium laptop stickers, skins, and keyboard covers to personalize your device and express your unique style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="bg-brand-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200 text-center"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-gold hover:text-black transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop"
                alt="Laptop with custom stickers and skin"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-brand-gold text-black p-4 rounded-full">
                <span className="text-2xl font-bold">50%</span>
                <span className="block text-sm">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Stick With Mo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer the highest quality laptop accessories with premium materials and unique designs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                High-quality materials that protect your device while looking amazing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-gold text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Installation</h3>
              <p className="text-gray-600">
                Simple peel-and-stick application with no bubbles or wrinkles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Unique Designs</h3>
              <p className="text-gray-600">
                Stand out with our exclusive designs and customizable options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most popular laptop accessories
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="bg-brand-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest news about new products and exclusive offers
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <button className="bg-brand-red px-6 py-3 rounded-r-lg font-semibold hover:bg-red-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
