import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname) => {
    switch (pathname) {
      case 'shop':
        return 'Shop';
      case 'about':
        return 'About';
      case 'contact':
        return 'Contact';
      case 'cart':
        return 'Cart';
      case 'login':
        return 'Login';
      case 'register':
        return 'Register';
      case 'my-account':
        return 'My Account';
      case 'admin':
        return 'Admin Dashboard';
      case 'product':
        return 'Product';
      default:
        return pathname.charAt(0).toUpperCase() + pathname.slice(1);
    }
  };

  if (pathnames.length === 0) return null;

  return (
    <motion.nav 
      className="bg-gray-50 dark:bg-dark-bg py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-gray-500 hover:text-stiletto transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(pathname);

            return (
              <motion.li 
                key={pathname}
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <svg 
                  className="w-4 h-4 text-gray-400 mx-2" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                
                {isLast ? (
                  <span className="text-gray-900 dark:text-dark-text font-medium">
                    {name}
                  </span>
                ) : (
                  <Link 
                    to={routeTo}
                    className="text-gray-500 hover:text-stiletto transition-colors duration-200"
                  >
                    {name}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </motion.nav>
  );
};

export default Breadcrumb;
