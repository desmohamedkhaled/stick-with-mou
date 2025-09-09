# Stick with Mo Database

This directory contains the complete database setup for the Stick with Mo e-commerce application.

## Database Structure

The database uses SQLite and includes the following tables:

### Core Tables
- **users** - User accounts and profiles
- **categories** - Product categories
- **products** - Product catalog
- **product_images** - Product images and galleries
- **product_reviews** - Customer reviews and ratings

### E-commerce Tables
- **cart_items** - Shopping cart items
- **orders** - Customer orders
- **order_items** - Individual items within orders
- **coupons** - Discount codes and promotions

### Additional Tables
- **wishlist** - User wishlists
- **contact_messages** - Contact form submissions
- **newsletter_subscribers** - Email newsletter subscribers
- **site_settings** - Application configuration

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Initialize Database
```bash
npm run db:init
```

### 3. Reset Database (if needed)
```bash
npm run db:reset
```

### 4. Start Development Server
```bash
npm run dev
```

This will start both the Express API server (port 3001) and React development server (port 3000).

## Database Features

### Relationships
- Products belong to categories
- Orders contain multiple order items
- Users can have multiple orders and cart items
- Products can have multiple images and reviews

### Data Integrity
- Foreign key constraints
- Check constraints for status fields
- Unique constraints for emails, SKUs, and order numbers
- Automatic timestamp updates

### Performance
- Indexes on frequently queried columns
- Optimized queries with JOINs
- Efficient cart and order operations

## Sample Data

The database comes pre-populated with:
- 3 product categories (Stickers, Laptop Skins, Keyboard Skins)
- 6 sample products with images
- 3 sample users (including admin)
- Sample orders and reviews
- Site settings and configuration

## API Endpoints

The Express server provides RESTful API endpoints:

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:categoryId` - Get products by category
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

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

## Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3001/api
PORT=3001
```

## Database File Location

The SQLite database file is created at:
```
database/stickwithmo.db
```

This file contains all your data and should be backed up regularly in production.

## Production Considerations

For production deployment:

1. Use a more robust database (PostgreSQL, MySQL)
2. Implement proper authentication and authorization
3. Add input validation and sanitization
4. Set up database backups
5. Use environment variables for configuration
6. Implement rate limiting and security headers
