#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Stick with Mo Database...\n');

try {
  // Check if node_modules exists
  if (!fs.existsSync('node_modules')) {
    console.log('📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  }

  // Create database directory if it doesn't exist
  const dbDir = path.join(__dirname, 'database');
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  // Initialize database
  console.log('🗄️  Initializing database...');
  execSync('npm run db:init', { stdio: 'inherit' });

  // Create .env file if it doesn't exist
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) {
    console.log('⚙️  Creating .env file...');
    const envContent = `REACT_APP_API_URL=http://localhost:3001/api
PORT=3001
`;
    fs.writeFileSync(envPath, envContent);
  }

  console.log('\n✅ Database setup complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Run "npm run dev" to start both the API server and React app');
  console.log('2. Or run "npm run server" to start just the API server');
  console.log('3. Or run "npm start" to start just the React app');
  console.log('\n🌐 API will be available at: http://localhost:3001');
  console.log('🌐 React app will be available at: http://localhost:3000');
  console.log('\n📊 Database file location: database/stickwithmo.db');

} catch (error) {
  console.error('❌ Error setting up database:', error.message);
  process.exit(1);
}
