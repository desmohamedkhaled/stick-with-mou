# Stick With Mo - Laptop Stickers E-commerce

A modern, responsive frontend-only e-commerce website for laptop stickers, skins, and keyboard covers built with React and localStorage for data persistence.

## ✨ Features

- 🛍️ **Product Catalog**: Browse and filter laptop accessories
- 🛒 **Shopping Cart**: Add/remove items with quantity management
- 👤 **User Authentication**: Login/register system with role-based access
- 🎨 **Dark/Light Theme**: Toggle between themes
- 📱 **Responsive Design**: Works on all devices
- ⚡ **Fast Performance**: Built with React and Framer Motion
- 💳 **EGP Currency**: All prices in Egyptian Pounds
- 💾 **Local Storage**: Data persistence using browser localStorage
- 📊 **Admin Dashboard**: Product management and analytics
- 🎯 **Frontend Only**: No backend required - runs entirely in the browser

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Context API** - State management
- **localStorage** - Browser-based data persistence

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

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

### That's it! 🎉

No database setup, no backend configuration, no environment variables needed. The app uses localStorage to persist data in your browser.

## 📋 Available Scripts

### Development
- `npm start` - Start React development server
- `npm test` - Run tests
- `npm run build` - Build React app for production
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
│   ├── utils/              # Utility functions
│   │   ├── links.js
│   │   └── navigation.js
│   └── App.js              # Main app component
├── public/                 # Static files
├── package.json            # Dependencies and scripts
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
- Product management (add, edit, delete)
- Analytics and reporting

### 💾 Data Persistence
- Browser localStorage for data storage
- User authentication state persistence
- Shopping cart persistence
- Product catalog with sample data
- Admin dashboard functionality

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Modern UI with Tailwind CSS

## 🚀 Deployment

### Local Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

### Deploy to Netlify (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Deploy to Netlify"
git push origin main
```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Import your GitHub repository
   - Netlify will auto-deploy on every push!

3. **Live URL**: Your site will be available at `https://your-project.netlify.app`

### Other Hosting Options
- **Vercel** - Great for static sites
- **GitHub Pages** - Free hosting for public repos
- **Firebase Hosting** - Google's hosting platform

No server configuration needed - just build and deploy the static files!

### 🎯 Live Demo
**Visit the live site**: [https://stick-with-mo.netlify.app](https://stick-with-mo.netlify.app)

## 📱 Demo Accounts

### Admin Account
- **Email:** admin@stickwithmo.com
- **Password:** admin123

### Test User Account
- **Email:** any email you want
- **Password:** any password you want

## 🔧 Development

### Code Structure
- **Frontend:** React with Context API
- **Data Storage:** Browser localStorage
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router

### Data Management
- **Products:** Stored in localStorage with sample data
- **Users:** Simulated authentication with localStorage
- **Cart:** Persistent cart using localStorage
- **Theme:** Theme preference saved in localStorage

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