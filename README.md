# Stick With Mo - Laptop Stickers E-commerce

A modern, responsive e-commerce website for laptop stickers, skins, and keyboard covers built with React and a complete database backend.

## ✨ Features

- 🛍️ **Product Catalog**: Browse and filter laptop accessories
- 🛒 **Shopping Cart**: Add/remove items with quantity management
- 👤 **User Authentication**: Login/register system with role-based access
- 🎨 **Dark/Light Theme**: Toggle between themes
- 📱 **Responsive Design**: Works on all devices
- ⚡ **Fast Performance**: Built with React and Framer Motion
- 💳 **EGP Currency**: All prices in Egyptian Pounds
- 🗄️ **Complete Database**: SQLite database with full CRUD operations
- 📊 **Admin Dashboard**: Product management and analytics
- 🔄 **RESTful API**: Express.js backend with comprehensive endpoints
- ⭐ **Product Reviews**: Customer reviews and ratings system
- 🎫 **Coupon System**: Discount codes and promotions
- 📦 **Order Management**: Complete order tracking and history

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Context API** - State management

### Backend
- **Express.js** - Web application framework
- **SQLite** - Lightweight database
- **Node.js** - JavaScript runtime
- **CORS** - Cross-origin resource sharing

### Database
- **SQLite** - Embedded database
- **12 Tables** - Complete e-commerce schema
- **Relationships** - Foreign keys and constraints
- **Indexes** - Optimized performance

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git** (for cloning)

### Quick Setup

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/stick-with-mo.git
cd stick-with-mo
```

2. **Run the setup script:**
```bash
npm run setup
```

This will automatically:
- Install all dependencies
- Initialize the database
- Create sample data
- Set up environment variables

3. **Start the development server:**
```bash
npm run dev
```

This starts both the API server (port 3001) and React app (port 3000).

### Manual Setup

If you prefer manual setup:

1. **Install dependencies:**
```bash
npm install
```

2. **Initialize the database:**
```bash
npm run db:init
```

3. **Create environment file:**
```bash
cp env.example .env
```

4. **Start the servers:**
```bash
# Start both API and React (recommended)
npm run dev

# Or start them separately
npm run server  # API server only
npm start       # React app only
```

## 📋 Available Scripts

### Development
- `npm run setup` - Complete project setup
- `npm run dev` - Start both API server and React app
- `npm start` - Start React development server
- `npm run server` - Start Express API server

### Database
- `npm run db:init` - Initialize database with sample data
- `npm run db:reset` - Reset database (delete and recreate)

### Production
- `npm run build` - Build React app for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📁 Project Structure

```
stick-with-mo/
├── src/                    # React frontend
│   ├── components/         # Reusable UI components
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── ProductCard.js
│   │   └── ...
│   ├── contexts/           # React Context providers
│   │   ├── AuthContext.js
│   │   ├── CartContext.js
│   │   ├── ProductContext.js
│   │   └── ThemeContext.js
│   ├── pages/              # Page components
│   │   ├── Home.js
│   │   ├── Shop.js
│   │   ├── Cart.js
│   │   ├── AdminDashboard.js
│   │   └── ...
│   ├── services/           # API services
│   │   └── databaseService.js
│   └── App.js              # Main app component
├── server/                 # Express.js backend
│   └── server.js           # API server
├── database/               # Database files
│   ├── schema.sql          # Database schema
│   ├── sample-data.json    # Sample data
│   ├── init.js             # Database initialization
│   ├── database.js         # Database service
│   └── README.md           # Database documentation
├── public/                 # Static files
├── package.json            # Dependencies and scripts
├── setup-database.js       # Setup script
└── README.md               # This file
```

## 🎯 Features Overview

### 🎨 Theme System
- Light and dark mode support
- Persistent theme preference
- Smooth transitions between themes

### 🛍️ E-commerce Features
- Product browsing and filtering by category
- Shopping cart with quantity management
- User authentication and registration
- Admin dashboard with product management
- Order tracking and history
- Product reviews and ratings
- Coupon and discount system

### 🗄️ Database Features
- Complete SQLite database with 12 tables
- User management and authentication
- Product catalog with categories
- Shopping cart persistence
- Order management system
- Review and rating system
- Admin analytics and reporting

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Modern UI with Tailwind CSS

### 🔄 API Features
- RESTful API with Express.js
- Complete CRUD operations
- Authentication endpoints
- Cart and order management
- Analytics and reporting
- Error handling and validation

## 🌐 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:categoryId` - Get products by category
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Users
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/email/:email` - Get user by email
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user

### Cart
- `GET /api/cart/:userId` - Get cart items
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove` - Remove item from cart
- `DELETE /api/cart/clear/:userId` - Clear entire cart

### Orders
- `GET /api/orders/user/:userId` - Get user orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order

### Analytics
- `GET /api/analytics/sales` - Get total sales
- `GET /api/analytics/stock` - Get total stock
- `GET /api/analytics/products` - Get product count

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run server
```

### Environment Variables
Copy `env.example` to `.env` and configure:
- `REACT_APP_API_URL` - API server URL
- `PORT` - Server port
- `JWT_SECRET` - JWT secret key
- Database and email configurations

## 📱 Demo Accounts

### Admin Account
- **Email:** admin@stickwithmo.com
- **Password:** admin123

### Test User Account
- **Email:** john@example.com
- **Password:** password123

## 🔧 Development

### Database Management
- **Initialize:** `npm run db:init`
- **Reset:** `npm run db:reset`
- **Schema:** `database/schema.sql`
- **Sample Data:** `database/sample-data.json`

### Code Structure
- **Frontend:** React with Context API
- **Backend:** Express.js with SQLite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion

## 📞 Social Media

- **Instagram:** [@stickwith.mou](https://www.instagram.com/stickwith.mou?igsh=dXQ2N2x3MnBwOGJw)
- **TikTok:** [@stickwith.mou](https://www.tiktok.com/@stickwith.mou?_t=ZS-8zZtls9UccS&_r=1)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For any questions or support, please contact us through our social media channels or create an issue on GitHub.

---

**Made with ❤️ for laptop sticker enthusiasts!**