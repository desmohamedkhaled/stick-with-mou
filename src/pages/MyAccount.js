import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const MyAccount = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Account Information</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-900">
                    {user?.name || 'N/A'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-900">
                    {user?.email || 'N/A'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Type
                  </label>
                  <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-900 capitalize">
                    {user?.role || 'N/A'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Member Since
                  </label>
                  <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-900">
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Order History</h2>
            </div>
            
            <div className="p-6">
              <div className="text-center py-8">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                <p className="text-gray-600 mb-4">
                  You haven't placed any orders yet. Start shopping to see your order history here.
                </p>
                <a
                  href="/shop"
                  className="bg-brand-red text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Start Shopping
                </a>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Account Actions</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors duration-200 text-left">
                  <div className="font-medium">Change Password</div>
                  <div className="text-sm text-gray-500">Update your account password</div>
                </button>
                
                <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors duration-200 text-left">
                  <div className="font-medium">Edit Profile</div>
                  <div className="text-sm text-gray-500">Update your personal information</div>
                </button>
                
                <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors duration-200 text-left">
                  <div className="font-medium">Address Book</div>
                  <div className="text-sm text-gray-500">Manage your shipping addresses</div>
                </button>
                
                <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors duration-200 text-left">
                  <div className="font-medium">Newsletter</div>
                  <div className="text-sm text-gray-500">Manage your email preferences</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
