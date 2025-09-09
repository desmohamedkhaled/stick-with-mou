// Test script to verify database connection
const databaseService = require('./database/database');

async function testConnection() {
  const db = new databaseService();
  
  try {
    console.log('Testing database connection...');
    await db.connect();
    
    console.log('Testing products query...');
    const products = await db.getAllProducts();
    console.log(`Found ${products.length} products in database`);
    
    console.log('Testing categories query...');
    const categories = await db.getAllCategories();
    console.log(`Found ${categories.length} categories in database`);
    
    console.log('Testing sales analytics...');
    const totalSales = await db.getTotalSales();
    console.log(`Total sales: $${totalSales}`);
    
    console.log('Testing stock analytics...');
    const totalStock = await db.getTotalStock();
    console.log(`Total stock: ${totalStock} items`);
    
    console.log('✅ Database connection test successful!');
    
  } catch (error) {
    console.error('❌ Database connection test failed:', error.message);
  } finally {
    await db.close();
  }
}

testConnection();
