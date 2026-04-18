# 🔧 Git Setup Guide

## 📋 Prerequisites

### Install Git
1. **Download Git**: [git-scm.com](https://git-scm.com/downloads)
2. **Install with default settings**
3. **Restart your terminal/command prompt**

### Create GitHub Account
1. **Go to**: [github.com](https://github.com)
2. **Sign up** for a free account
3. **Verify your email**

## 🚀 Setup Repository

### 1. Create New Repository on GitHub
1. **Go to GitHub** and click "New Repository"
2. **Name**: `stick-with-mo`
3. **Description**: `Frontend-only e-commerce website for laptop stickers`
4. **Make it Public** (for free hosting)
5. **Don't initialize** with README (we already have files)
6. **Click "Create Repository"**

### 2. Initialize Local Git
```bash
# Navigate to your project folder
cd "D:\Stick-with Mo"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Frontend only e-commerce site"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/stick-with-mo.git

# Push to GitHub
git push -u origin main
```

## 🔄 Daily Workflow

### Making Changes
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

### Pulling Changes (if working with others)
```bash
# Pull latest changes
git pull origin main
```

## 🚀 Deploy to Netlify

### After pushing to GitHub:
1. **Go to**: [netlify.com](https://netlify.com)
2. **Sign in** with GitHub
3. **Click "New site from Git"**
4. **Import** your `stick-with-mo` repository
5. **Click "Deploy site"**

### Your site will be live at:
`https://stick-with-mo.netlify.app` (or similar URL)

## 🔧 Troubleshooting

### If Git is not recognized:
1. **Restart** your terminal/command prompt
2. **Check PATH** environment variable
3. **Reinstall Git** if needed

### If push fails:
1. **Check your GitHub username** in the remote URL
2. **Make sure repository exists** on GitHub
3. **Check your internet connection**

### If Netlify deployment fails:
1. **Check build logs** in Netlify dashboard
2. **Make sure** `npm run build` works locally
3. **Check** that all files are committed to GitHub

## 📞 Support

- **Git Documentation**: [git-scm.com/doc](https://git-scm.com/doc)
- **GitHub Help**: [help.github.com](https://help.github.com)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)

---

**🎉 Once set up, every `git push` will automatically deploy your site!**
