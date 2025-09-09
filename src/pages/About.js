import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-brand-red">Stick</span> With <span className="text-brand-gold">Mo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about helping you personalize your devices with premium quality laptop accessories that reflect your unique style.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Founded in 2024, Stick With Mo began with a simple mission: to provide high-quality, 
                stylish laptop accessories that allow people to express their personality through their devices.
              </p>
              <p className="mb-4">
                What started as a small collection of custom laptop stickers has grown into a comprehensive 
                line of premium laptop skins, keyboard covers, and accessories. We believe that your laptop 
                should be as unique as you are.
              </p>
              <p>
                Every product in our collection is carefully designed and manufactured using the highest 
                quality materials to ensure durability, easy application, and stunning visual appeal.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We use only premium materials and rigorous quality control to ensure every product meets our high standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-gold text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Love</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're committed to providing exceptional customer service and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to bring you the latest designs and cutting-edge materials.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">MO</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Mo Johnson</h3>
                <p className="text-brand-red font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Passionate about design and technology, Mo started Stick With Mo to help people express their creativity.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">AS</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Alex Smith</h3>
                <p className="text-brand-red font-medium mb-2">Head of Design</p>
                <p className="text-gray-600 text-sm">
                  Creative visionary responsible for our unique product designs and brand aesthetic.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">SJ</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-brand-red font-medium mb-2">Customer Success</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to ensuring every customer has an amazing experience with our products.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-brand-black to-gray-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-6">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
            <a
              href="/contact"
              className="bg-brand-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
