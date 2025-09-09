# Stick With Mo - React E-commerce Prototype

A modern React e-commerce website prototype for "Stick With Mo", a brand that sells laptop stickers, laptop skins, and keyboard skins. Built with React, React Router, and Tailwind CSS.

## 🎨 Design Theme

- **Colors**: Red (#FF0000), Black (#000000), Gold (#FFD700)
- **Typography**: Inter font family
- **Style**: Modern, minimal UI with clean design

## ✨ Features

### 🏠 Landing Page
- Brand logo with elegant typography
- Hero section with call-to-action buttons
- Featured products grid
- Features section highlighting benefits
- Newsletter subscription

### 🛍️ Shop Page
- Product grid layout with filtering
- Category filters (Stickers, Laptop Skins, Keyboard Skins)
- Sort options (Name, Price)
- Product cards with images, titles, prices, and add to cart functionality

### 🛒 Cart Page
- Shopping cart with quantity controls
- Order summary with subtotal, shipping, and tax
- Checkout button (prototype - no real payment processing)
- Remove items and clear cart functionality

### 🔐 Authentication
- Login and Register forms
- Protected routes for authenticated users
- Admin role with special privileges
- Demo credentials provided

### 👤 User Account
- My Account page with user information
- Order history (placeholder)
- Account management options

### ⚙️ Admin Dashboard
- Sales and inventory statistics
- Product management (Add, Delete)
- Product table with all details
- Admin-only access protection

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🔑 Demo Credentials

### Admin Access
- **Email**: `admin@stickwithmo.com`
- **Password**: `admin123`

### Regular User
- Use any email and password to create a new account

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer component
│   ├── ProductCard.js  # Product display card
│   └── ProtectedRoute.js # Route protection
├── contexts/           # React Context for state management
│   ├── AuthContext.js  # Authentication state
│   ├── CartContext.js  # Shopping cart state
│   └── ProductContext.js # Product data management
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Shop.js         # Product listing
│   ├── Cart.js         # Shopping cart
│   ├── Login.js        # Login form
│   ├── Register.js     # Registration form
│   ├── MyAccount.js    # User account page
│   ├── AdminDashboard.js # Admin panel
│   ├── About.js        # About page
│   └── Contact.js      # Contact page
├── App.js              # Main app component with routing
└── index.js            # App entry point
```

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **React Router 6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - State management
- **Local Storage** - Data persistence

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 Key Features Implemented

### ✅ Completed Features
- [x] Landing page with hero section and featured products
- [x] Shop page with product filtering and sorting
- [x] Shopping cart with quantity controls
- [x] User authentication (login/register)
- [x] Protected routes
- [x] Admin dashboard with product management
- [x] Responsive design
- [x] Red, black, and gold theme
- [x] Modern UI with Tailwind CSS

### 🔄 Prototype Features
- Data stored in browser localStorage (no backend)
- Mock checkout process
- Sample product data
- Demo authentication system

## 🎨 Customization

### Colors
The brand colors are defined in `tailwind.config.js`:
- `brand-red`: #FF0000
- `brand-black`: #000000
- `brand-gold`: #FFD700

### Adding New Products
Admins can add new products through the admin dashboard at `/admin`.

### Modifying Styles
All styles use Tailwind CSS classes. Custom styles can be added to `src/index.css`.

## 🚀 Deployment

To build the project for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📝 Notes

- This is a prototype/demo application
- No real payment processing is implemented
- Data is stored in browser localStorage
- Authentication is simulated for demo purposes
- All product images are placeholder images from Unsplash

## 🤝 Contributing

This is a prototype project. For production use, consider:
- Adding a real backend API
- Implementing proper authentication
- Adding payment processing
- Database integration
- Enhanced security measures

## 📄 License

This project is for demonstration purposes only.
