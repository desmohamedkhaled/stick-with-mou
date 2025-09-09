# Contributing to Stick with Mo

Thank you for your interest in contributing to Stick with Mo! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/stick-with-mo.git
   cd stick-with-mo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   ```bash
   npm run setup
   ```
5. Start development:
   ```bash
   npm run dev
   ```

## 🛠️ Development Workflow

### Branch Naming
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical fixes
- `docs/description` - Documentation updates

### Commit Messages
Use clear, descriptive commit messages:
```
feat: add product search functionality
fix: resolve cart quantity update issue
docs: update API documentation
style: improve button hover effects
```

### Code Style
- Use ESLint configuration
- Follow React best practices
- Use meaningful variable names
- Add comments for complex logic
- Keep components small and focused

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Coverage
- Aim for good test coverage
- Test both success and error cases
- Include integration tests for API endpoints

## 📝 Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Commit your changes** with clear messages
6. **Push to your fork** and create a Pull Request

### PR Requirements
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No console errors
- [ ] Responsive design maintained

## 🐛 Bug Reports

When reporting bugs, please include:
- **Description** of the issue
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment** details (OS, browser, Node version)

## ✨ Feature Requests

For feature requests, please provide:
- **Clear description** of the feature
- **Use case** and benefits
- **Mockups** or examples (if applicable)
- **Implementation suggestions** (optional)

## 🏗️ Project Structure

### Frontend (`src/`)
- `components/` - Reusable UI components
- `contexts/` - React Context providers
- `pages/` - Page components
- `services/` - API services

### Backend (`server/`)
- `server.js` - Express.js API server

### Database (`database/`)
- `schema.sql` - Database schema
- `sample-data.json` - Sample data
- `init.js` - Database initialization

## 🔧 Development Guidelines

### Database Changes
- Update schema in `database/schema.sql`
- Add migration scripts if needed
- Update sample data if applicable
- Test with `npm run db:reset`

### API Changes
- Follow RESTful conventions
- Add proper error handling
- Update API documentation
- Test all endpoints

### UI/UX Changes
- Maintain responsive design
- Follow design system
- Test on multiple devices
- Ensure accessibility

## 📚 Resources

- [React Documentation](https://reactjs.org/docs)
- [Express.js Guide](https://expressjs.com/guide)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the code of conduct

## 📞 Getting Help

- Create an issue for questions
- Join discussions in issues
- Contact maintainers if needed

Thank you for contributing to Stick with Mo! 🎉
