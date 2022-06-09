const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name needed'],
  },
  price: {
    type: Number,
    required: [true, 'product price needed'],
  },

  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'macros'],
      message: 'value not supported',
    },
    // enum:['ikea','liddy','caressa','macros']
  },
});

// export schema
module.exports = mongoose.model('Product', productSchema);
