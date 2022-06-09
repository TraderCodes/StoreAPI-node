require('dotenv').config();
require('express-async-errors'); //async try and catch errors

const express = require('express');
const app = express();
// import middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const res = require('express/lib/response');
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
app.use(express.json());
1;

// routes
app.get('/', (req, res) => {
  res.send('<h1>storeAPI</h1><a href="/api/v1/products">products routes</a>');
});

app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, console.log('server live'));

  } catch (error) {
    console.log('error');

  }
};
start();
