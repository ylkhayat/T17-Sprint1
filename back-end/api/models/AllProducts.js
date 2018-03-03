var mongoose = require('mongoose');

var allSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  component:{
    type: String,
    quired: true,
    trim: true,
  lowercase: true
},
seller: {
  type: String,
  required: true,
  trim: true,
  lowercase: true
},
  updatedAt: Date
});

mongoose.model('AllProducts', allSchema);
