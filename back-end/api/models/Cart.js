var mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
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

mongoose.model('Cart', cartSchema);
