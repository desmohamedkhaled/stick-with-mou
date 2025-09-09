// Centralized link management for the entire application

export const INTERNAL_LINKS = {
  // Main navigation
  HOME: '/',
  SHOP: '/shop',
  ABOUT: '/about',
  CONTACT: '/contact',
  
  // User related
  LOGIN: '/login',
  REGISTER: '/register',
  MY_ACCOUNT: '/my-account',
  CART: '/cart',
  
  // Admin
  ADMIN: '/admin',
  
  // Product related
  PRODUCT: (id) => `/product/${id}`,
  
  // Category related
  CATEGORY: (category) => `/shop?category=${category}`,
  
  // Shop with filters
  SHOP_WITH_FILTERS: (filters = {}) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    return `/shop${params.toString() ? `?${params.toString()}` : ''}`;
  }
};

export const EXTERNAL_LINKS = {
  // Social media
  INSTAGRAM: 'https://www.instagram.com/stickwith.mou?igsh=dXQ2N2x3MnBwOGJw',
  TIKTOK: 'https://www.tiktok.com/@stickwith.mou?_t=ZS-8zZtls9UccS&_r=1',
  
  // Contact
  EMAIL: 'mailto:info@stickwithmo.com',
  PHONE: 'tel:+1234567890',
  
  // Support
  FAQ: '/faq',
  SHIPPING: '/shipping',
  RETURNS: '/returns',
  SIZE_GUIDE: '/size-guide'
};

export const PRODUCT_CATEGORIES = {
  STICKERS: 'stickers',
  LAPTOP_SKINS: 'laptop-skins',
  KEYBOARD_SKINS: 'keyboard-skins'
};

// Helper functions for navigation
export const navigateToProduct = (productId) => INTERNAL_LINKS.PRODUCT(productId);
export const navigateToCategory = (category) => INTERNAL_LINKS.CATEGORY(category);
export const navigateToShop = (filters) => INTERNAL_LINKS.SHOP_WITH_FILTERS(filters);

// Link validation
export const isValidInternalLink = (path) => {
  return Object.values(INTERNAL_LINKS).some(link => 
    typeof link === 'string' ? link === path : false
  );
};

// Breadcrumb helpers
export const getBreadcrumbPath = (pathname) => {
  const pathnames = pathname.split('/').filter(x => x);
  return pathnames.map((path, index) => ({
    name: path.charAt(0).toUpperCase() + path.slice(1),
    path: `/${pathnames.slice(0, index + 1).join('/')}`
  }));
};
