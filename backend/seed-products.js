// backend/seed-products.js
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

const DB_URI = 'mongodb+srv://oluwadydx:Doyin.1234@oluwadydx.aqvjvhi.mongodb.net/?retryWrites=true&w=majority&appName=oluwadydx';

mongoose.connect(DB_URI, {
  serverSelectionTimeoutMS: 5000
});
const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany([
      {
        name: 'Nino Tee',
        price: '₦10,500',
        image: '/assets/Frames/naruto-tshirt.png',
        category: 'NARUTO',
      },
      {
        name: 'AOT Bracelet',
        price: '₦3,500',
        image: '/assets/Frames/aot-bracelets.png',
        category: 'AOT',
      },
      {
        name: 'Bleach Necklace',
        price: '₦4,500',
        image: '/assets/Frames/bleach-necklace.png',
        category: 'BLEACH',
      },
      {
        name: 'Anime Cosplay Katana',
        price: '₦13,000',
        image: '/assets/Frames/katana.png',
        category: 'ACCESSORIES',
      },
    ]);
    console.log('Products seeded');
  } catch (error) {
    console.error('Seed error:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedProducts();