// add value to date base
require('dotenv').config();
const connectDB = require('./db/connect');
const jsonProducts = require('./products.json');
const Product = require('./models/product');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('success');
  } catch (error) {
    console.log(error);
  }
};
start();
