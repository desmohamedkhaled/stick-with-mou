# 🚀 Deployment Guide - Stick with Mo

This guide covers different deployment options for the Stick with Mo frontend-only e-commerce application.

## 🎯 Quick Deploy to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-deploy!

### 3. Live Site
Your site will be available at: `https://your-project.vercel.app`

## 🚀 Deployment Options

### 1. Local Development
```bash
npm start
```
- React App: http://localhost:3000

### 2. Production Build
```bash
npm run build
```

## ☁️ Cloud Deployment

### Heroku Deployment

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Create Heroku App**
   ```bash
   heroku create stick-with-mo
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set REACT_APP_API_URL=https://your-app.herokuapp.com/api
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Environment Variables**
   - Add `REACT_APP_API_URL` in Vercel dashboard

### Netlify Deployment

1. **Build Command**
   ```bash
   npm run build
   ```

2. **Publish Directory**
   ```
   build
   ```

3. **Environment Variables**
   - `REACT_APP_API_URL`: Your API URL

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "server"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - PORT=3001
    volumes:
      - ./database:/app/database
```

## 🗄️ Database Deployment

### SQLite (Development)
- Database file: `database/stickwithmo.db`
- No additional setup required

### PostgreSQL (Production)
1. **Install PostgreSQL**
2. **Update database connection**
3. **Run migrations**
4. **Seed data**

### MySQL (Production)
1. **Install MySQL**
2. **Create database**
3. **Update schema**
4. **Import data**

## 🔧 Environment Configuration

### Required Variables
```env
NODE_ENV=production
PORT=3001
REACT_APP_API_URL=https://your-domain.com/api
JWT_SECRET=your-secret-key
```

### Optional Variables
```env
DATABASE_URL=postgresql://user:pass@host:port/db
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
```

## 📊 Performance Optimization

### Frontend
- Enable gzip compression
- Use CDN for static assets
- Implement caching strategies
- Optimize images

### Backend
- Enable compression middleware
- Implement rate limiting
- Use connection pooling
- Add monitoring

## 🔒 Security Considerations

### Production Checklist
- [ ] Use HTTPS
- [ ] Set secure environment variables
- [ ] Enable CORS properly
- [ ] Implement rate limiting
- [ ] Add input validation
- [ ] Use secure headers
- [ ] Regular security updates

### Environment Variables
- Never commit `.env` files
- Use strong JWT secrets
- Secure database credentials
- Configure CORS origins

## 📈 Monitoring

### Health Checks
- API endpoint: `/api/health`
- Database connection status
- Memory usage monitoring

### Logging
- Application logs
- Error tracking
- Performance metrics

## 🔄 CI/CD Pipeline

### GitHub Actions
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        run: # Your deployment commands
```

## 🆘 Troubleshooting

### Common Issues
1. **Port conflicts**: Change PORT environment variable
2. **Database errors**: Check file permissions
3. **Build failures**: Clear node_modules and reinstall
4. **CORS issues**: Configure allowed origins

### Debug Mode
```bash
DEBUG=* npm run server
```

## 📞 Support

For deployment issues:
- Check logs for error messages
- Verify environment variables
- Test locally first
- Create an issue on GitHub

---

**Happy Deploying! 🚀**
