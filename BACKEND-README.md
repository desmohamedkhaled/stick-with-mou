# Stick with Mo - Full Stack E-commerce Backend

A complete Node.js backend application with integrated React frontend, SQLite database, and REST API for an e-commerce platform.

## 🚀 Quick Start

### Production Mode (Recommended)
```bash
npm run production
```

### Development Mode
```bash
npm run dev
```

### Backend Only
```bash
npm run server
```

## 📁 Project Structure

```
├── server/                 # Backend server files
│   └── server.js          # Main Express server
├── database/              # Database files
│   ├── database.js        # Database service class
│   ├── init.js           # Database initialization
│   ├── schema.sql        # Database schema
│   └── sample-data.json  # Sample data
├── src/                  # React frontend source
├── build/                # Built React app (generated)
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🛠️ Features

### Backend API
- **Products Management**: CRUD operations for products
- **Categories**: Product categorization system
- **User Management**: User registration and authentication
- **Shopping Cart**: Cart management functionality
- **Orders**: Order processing and tracking
- **Analytics**: Sales and inventory analytics
- **Reviews**: Product review system

### Frontend (Integrated)
- **Responsive Design**: Mobile-first approach
- **Admin Dashboard**: Product and analytics management
- **Product Catalog**: Browse and search products
- **Shopping Cart**: Add/remove items
- **User Authentication**: Login/register system

### Database
- **SQLite**: Lightweight, file-based database
- **Sample Data**: Pre-loaded with products and categories
- **Relationships**: Proper foreign key relationships
- **Indexes**: Optimized for performance

## 🌐 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:categoryId` - Get products by category
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID

### Cart
- `GET /api/cart/:userId` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove` - Remove from cart
- `DELETE /api/cart/clear/:userId` - Clear user's cart

### Orders
- `GET /api/orders/user/:userId` - Get user's orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order

### Analytics
- `GET /api/analytics/sales` - Get total sales
- `GET /api/analytics/stock` - Get total stock
- `GET /api/analytics/products` - Get product count

### Users
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/email/:email` - Get user by email
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user

## 🗄️ Database Schema

### Tables
- **users**: User accounts and profiles
- **categories**: Product categories
- **products**: Product information
- **product_images**: Product images
- **product_reviews**: Customer reviews
- **cart_items**: Shopping cart items
- **orders**: Order information
- **order_items**: Order line items
- **coupons**: Discount coupons
- **wishlist**: User wishlists
- **contact_messages**: Contact form submissions
- **newsletter_subscribers**: Email subscribers
- **site_settings**: Application settings

## 🚀 Deployment

### Local Production
```bash
npm run production
```

### Environment Variables
Create a `.env` file with:
```
PORT=3001
NODE_ENV=production
DATABASE_URL=sqlite:database/stickwithmo.db
JWT_SECRET=your-secret-key
ADMIN_EMAIL=admin@stickwithmo.com
ADMIN_PASSWORD=admin123
```

### Docker (Optional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "production"]
```

## 📊 Sample Data

The application comes with pre-loaded sample data:
- **6 Products**: Stickers, laptop skins, keyboard skins
- **3 Categories**: Stickers, Laptop Skins, Keyboard Skins
- **Sample Orders**: With realistic order data
- **Product Images**: High-quality images from Unsplash
- **Reviews**: Customer reviews and ratings

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Initialize database
npm run db:init

# Start development server
npm run dev
```

### Database Management
```bash
# Reset database
npm run db:reset

# Initialize fresh database
npm run db:init
```

## 🌐 Access Points

When running in production mode:
- **Main Application**: http://localhost:3001
- **Admin Dashboard**: http://localhost:3001/admin
- **API Documentation**: http://localhost:3001/api
- **API Health Check**: http://localhost:3001/api/products

## 📝 API Usage Examples

### Get All Products
```bash
curl http://localhost:3001/api/products
```

### Create New Product
```bash
curl -X POST http://localhost:3001/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Product",
    "price": 99.99,
    "category_id": 1,
    "stock_quantity": 10,
    "description": "Product description"
  }'
```

### Get Analytics
```bash
curl http://localhost:3001/api/analytics/sales
```

## 🛡️ Security Features

- CORS enabled for cross-origin requests
- Input validation and sanitization
- SQL injection protection
- Error handling and logging
- Environment-based configuration

## 📈 Performance

- SQLite database with indexes
- Optimized React build
- Static file serving
- Efficient API endpoints
- Connection pooling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the API endpoints at `/api`
- Review the database schema in `database/schema.sql`
- Check server logs for debugging information

---

**Stick with Mo** - Your complete e-commerce solution! 🎉
