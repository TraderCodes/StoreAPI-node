const Product = require('../models/product');
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  //  want to return products in json format
  res.status(200).json({ products: products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};
  // first we check if there is featured in the link which is the query
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
