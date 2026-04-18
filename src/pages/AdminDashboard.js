import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../contexts/ProductContext';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const { products, addProduct, deleteProduct, getTotalSales, getTotalStock, loading } = useProducts();
  const [totalSales, setTotalSales] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'stickers',
    description: '',
    image: '',
    stock: ''
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const loadTotalSales = async () => {
      const sales = await getTotalSales();
      setTotalSales(sales);
    };
    loadTotalSales();
  }, [getTotalSales]);

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setNewProduct({
          ...newProduct,
          image: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.description) {
      addProduct(newProduct);
      setNewProduct({
        name: '',
        price: '',
        category: 'stickers',
        description: '',
        image: '',
        stock: ''
      });
      setImagePreview(null);
      setShowAddForm(false);
    }
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-stiletto mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Check if user is admin
  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You need admin privileges to access this page.</p>
          <a href="/login" className="bg-stiletto text-white px-6 py-2 rounded-lg hover:bg-chestnut-rose transition-colors">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-text">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-dark-text-secondary mt-2">
            Welcome, {user?.name || 'Admin'}! Manage your products and view store statistics
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, staggerChildren: 0.1 }}
        >
          <motion.div 
            className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center">
              <motion.div 
                className="bg-stiletto text-white p-3 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </motion.div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Total Sales</h3>
                <p className="text-2xl font-bold text-brand-red">{totalSales.toFixed(2)} EGP</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center">
              <motion.div 
                className="bg-anzac text-white p-3 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </motion.div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Total Stock</h3>
                <p className="text-2xl font-bold text-anzac">{getTotalStock()}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center">
              <motion.div 
                className="bg-william text-white p-3 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </motion.div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Total Products</h3>
                <p className="text-2xl font-bold text-brand-black">{products.length}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Products Management */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Products Management</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-stiletto text-white px-4 py-2 rounded-md hover:bg-chestnut-rose transition-colors duration-200"
            >
              {showAddForm ? 'Cancel' : 'Add New Product'}
            </button>
          </div>

          {/* Add Product Form */}
          {showAddForm && (
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Enter product name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (EGP)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  >
                    <option value="stickers">Stickers</option>
                    <option value="laptop-skins">Laptop Skins</option>
                    <option value="keyboard-skins">Keyboard Skins</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="0"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Enter product description"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Image
                      </label>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                       Upload from device:
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      />
                    </div>
                    
                    <div className="text-center text-gray-500">or</div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter Image URL:
                      </label>
                      <input
                        type="url"
                        name="image"
                        value={newProduct.image}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    {imagePreview && (
                      <div className="mt-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Image Preview:</div>
                        <div className="flex justify-center">
                          <img
                            src={imagePreview}
                            alt="Image Preview"
                            className="w-48 h-48 object-cover rounded-lg border-2 border-gray-300 shadow-md"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-william text-white px-6 py-2 rounded-md hover:bg-finch transition-colors duration-200"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img
                            className="h-12 w-12 rounded-lg object-cover"
                            src={product.primary_image || product.image || 'https://via.placeholder.com/48x48?text=No+Image'}
                            alt={product.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 capitalize">
                        {(product.category_slug || product.category || '').replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      EGP{product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.stock_quantity || product.stock || 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-stiletto hover:text-chestnut-rose"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
