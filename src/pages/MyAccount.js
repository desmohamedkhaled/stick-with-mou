import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const MyAccount = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'wishlist', label: 'Wishlist', icon: '❤️' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    ...(user?.role === 'admin' ? [{ id: 'admin', label: 'Admin Panel', icon: '🛠️' }] : [])
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-2">
              My Account
              {user?.role === 'admin' && <span className="ml-3 text-stiletto">👑</span>}
            </h1>
            {user?.role === 'admin' && (
              <p className="text-stiletto font-medium mb-6">
                Welcome, Admin! You have full access to manage the store.
              </p>
            )}
          </motion.div>

          {/* Tab Navigation */}
          <motion.div 
            className="bg-white dark:bg-dark-surface rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap border-b border-gray-200 dark:border-dark-border">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-stiletto border-b-2 border-stiletto bg-red-50 dark:bg-red-900/20'
                      : 'text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Tab Content */}
          <motion.div 
            className="bg-white dark:bg-dark-surface rounded-lg shadow-md overflow-hidden"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'profile' && (
              <div>
                <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-border">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Account Information</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">
                        Full Name
                      </label>
                      <div className="bg-gray-50 dark:bg-dark-border px-3 py-2 rounded-md text-gray-900 dark:text-dark-text">
                        {user?.name || 'Not specified'}
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">
                        Email Address
                      </label>
                      <div className="bg-gray-50 dark:bg-dark-border px-3 py-2 rounded-md text-gray-900 dark:text-dark-text">
                        {user?.email || 'Not specified'}
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">
                        Account Type
                      </label>
                      <div className={`px-3 py-2 rounded-md text-gray-900 dark:text-dark-text capitalize flex items-center space-x-2 ${
                        user?.role === 'admin' 
                          ? 'bg-stiletto text-white' 
                          : 'bg-gray-50 dark:bg-dark-border'
                      }`}>
                        <span>{user?.role === 'admin' ? 'Admin' : 'Customer'}</span>
                        {user?.role === 'admin' && <span className="text-xs">👑</span>}
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">
                        Member Since
                      </label>
                      <div className="bg-gray-50 dark:bg-dark-border px-3 py-2 rounded-md text-gray-900 dark:text-dark-text">
                        {new Date().toLocaleDateString('en-US')}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-border">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Order History</h2>
                </div>
                
                <div className="p-6">
                  <div className="text-center py-8">
                    <motion.div 
                      className="text-gray-400 mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </motion.div>
                    <motion.h3 
                      className="text-lg font-medium text-gray-900 dark:text-dark-text mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      No orders yet
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-dark-text-secondary mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      You haven't placed any orders yet. Start shopping to see your order history here.
                    </motion.p>
                    <motion.a
                      href="/shop"
                      className="bg-stiletto text-white px-6 py-2 rounded-md font-medium hover:bg-chestnut-rose transition-colors duration-200 inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Shopping
                    </motion.a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-border">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Wishlist</h2>
                </div>
                
                <div className="p-6">
                  <div className="text-center py-8">
                    <motion.div 
                      className="text-gray-400 mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </motion.div>
                    <motion.h3 
                      className="text-lg font-medium text-gray-900 dark:text-dark-text mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Wishlist is empty
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-dark-text-secondary mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      You haven't added any products to your wishlist yet. Start adding products you like!
                    </motion.p>
                    <motion.a
                      href="/shop"
                      className="bg-stiletto text-white px-6 py-2 rounded-md font-medium hover:bg-chestnut-rose transition-colors duration-200 inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Browse Products
                    </motion.a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-border">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Account Settings</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.button 
                      className="bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-dark-text px-4 py-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-medium">Change Password</div>
                      <div className="text-sm text-gray-500 dark:text-dark-text-secondary">Update your account password</div>
                    </motion.button>
                    
                    <motion.button 
                      className="bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-dark-text px-4 py-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-medium">Edit Profile</div>
                      <div className="text-sm text-gray-500 dark:text-dark-text-secondary">Update your personal information</div>
                    </motion.button>
                    
                    <motion.button 
                      className="bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-dark-text px-4 py-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-medium">Address Book</div>
                      <div className="text-sm text-gray-500 dark:text-dark-text-secondary">Manage your shipping addresses</div>
                    </motion.button>
                    
                    <motion.button 
                      className="bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-dark-text px-4 py-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-medium">Newsletter</div>
                      <div className="text-sm text-gray-500 dark:text-dark-text-secondary">Manage your email preferences</div>
                    </motion.button>
                  </div>

                  <motion.div 
                    className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      onClick={logout}
                      className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-chestnut-rose transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Logout
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            )}

            {activeTab === 'admin' && user?.role === 'admin' && (
              <div>
                <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-border">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Admin Panel</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.a
                      href="/admin"
                      className="bg-stiletto text-white px-6 py-4 rounded-lg hover:bg-chestnut-rose transition-colors duration-200 text-center block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-2xl mb-2">🛠️</div>
                      <div className="font-semibold text-lg">Admin Dashboard</div>
                      <div className="text-sm opacity-90">Manage products, view statistics, and control the store</div>
                    </motion.a>
                    
                    <motion.div
                      className="bg-anzac text-white px-6 py-4 rounded-lg text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-2xl mb-2">📊</div>
                      <div className="font-semibold text-lg">Quick Stats</div>
                      <div className="text-sm opacity-90 mt-2">
                        <div>Total Products: {cartItems.length > 0 ? 'Loading...' : '10+'}</div>
                        <div>Admin Access: Active</div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="mt-6 p-4 bg-gray-50 dark:bg-dark-border rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">Admin Features:</h3>
                    <ul className="text-sm text-gray-600 dark:text-dark-text-secondary space-y-1">
                      <li>• Add, edit, and delete products</li>
                      <li>• View sales statistics and inventory</li>
                      <li>• Manage product categories</li>
                      <li>• Upload product images</li>
                      <li>• Control stock quantities</li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
