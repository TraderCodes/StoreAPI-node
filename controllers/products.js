const Product = require('../models/product');
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  //  want to return products in json format
  res.status(200).json({ products: products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  // can set up whatever name you want
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};
  // first we check if there is featured in the link which is the query
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  // use await after sorting
  let result = Product.find(queryObject);
  if (sort) {
    // you need space in between each sort value to work
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    // sort base off datecreated
    result = result.sort('createdAt');
  }

  // pick a selected item
  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
