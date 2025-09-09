#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting Stick with Mo Production Server...\n');

try {
  // Set production environment
  process.env.NODE_ENV = 'production';
  process.env.PORT = process.env.PORT || 3001;
  
  console.log('📦 Building React application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('🗄️ Initializing database...');
  execSync('npm run db:init', { stdio: 'inherit' });
  
  console.log('🌐 Starting production server...');
  console.log('✅ Server will be available at: http://localhost:' + (process.env.PORT || 3001));
  console.log('✅ Admin dashboard: http://localhost:' + (process.env.PORT || 3001) + '/admin');
  console.log('✅ API endpoints: http://localhost:' + (process.env.PORT || 3001) + '/api');
  console.log('\n🎉 Production server is ready!\n');
  
  // Start the server
  require('./server/server.js');
  
} catch (error) {
  console.error('❌ Error starting production server:', error.message);
  process.exit(1);
}
