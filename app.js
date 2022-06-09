require('dotenv').config();

const express = require('express');
const app = express();
// import middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const res = require('express/lib/response');

app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>storeAPI</h1><a href="/api/v1/products">products routes</a>');
});
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    app.listen(3000, console.log('server live'));
  } catch (error) {
    console.log('error');
  }
};
start();
