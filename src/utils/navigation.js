// Navigation utilities and route constants
export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  ABOUT: '/about',
  CONTACT: '/contact',
  CART: '/cart',
  LOGIN: '/login',
  REGISTER: '/register',
  MY_ACCOUNT: '/my-account',
  ADMIN: '/admin',
  PRODUCT_DETAIL: '/product/:id'
};

// Navigation menu items
export const NAVIGATION_ITEMS = [
  { name: 'Home', path: ROUTES.HOME, icon: '🏠' },
  { name: 'Shop', path: ROUTES.SHOP, icon: '🛍️' },
  { name: 'About', path: ROUTES.ABOUT, icon: 'ℹ️' },
  { name: 'Contact', path: ROUTES.CONTACT, icon: '📞' }
];

// User menu items
export const USER_MENU_ITEMS = [
  { name: 'My Account', path: ROUTES.MY_ACCOUNT, icon: '👤', requiresAuth: true },
  { name: 'Admin Dashboard', path: ROUTES.ADMIN, icon: '⚙️', requiresAuth: true, requiresAdmin: true }
];

// Footer links
export const FOOTER_LINKS = {
  QUICK_LINKS: [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'Shop', path: ROUTES.SHOP },
    { name: 'About', path: ROUTES.ABOUT },
    { name: 'Contact', path: ROUTES.CONTACT }
  ],
  CUSTOMER_SERVICE: [
    { name: 'Shipping Info', path: '/shipping' },
    { name: 'Returns', path: '/returns' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'FAQ', path: '/faq' }
  ],
  SOCIAL_MEDIA: [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/stickwith.mou?igsh=dXQ2N2x3MnBwOGJw',
      icon: '📷'
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@stickwith.mou?_t=ZS-8zZtls9UccS&_r=1',
      icon: '🎵'
    }
  ]
};

// Product categories
export const PRODUCT_CATEGORIES = [
  { id: 1, name: 'Stickers', slug: 'stickers', path: '/shop?category=stickers' },
  { id: 2, name: 'Laptop Skins', slug: 'laptop-skins', path: '/shop?category=laptop-skins' },
  { id: 3, name: 'Keyboard Skins', slug: 'keyboard-skins', path: '/shop?category=keyboard-skins' }
];

// Helper functions
export const getProductPath = (productId) => `/product/${productId}`;
export const getCategoryPath = (categorySlug) => `/shop?category=${categorySlug}`;
export const getShopPath = (filters = {}) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });
  return `/shop${params.toString() ? `?${params.toString()}` : ''}`;
};

// Navigation helpers
export const isActiveRoute = (currentPath, routePath) => {
  if (routePath === ROUTES.HOME) {
    return currentPath === ROUTES.HOME;
  }
  return currentPath.startsWith(routePath);
};

export const canAccessRoute = (route, user) => {
  if (route.requiresAuth && !user) return false;
  if (route.requiresAdmin && (!user || user.role !== 'admin')) return false;
  return true;
};
