var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  Cart = mongoose.model('Cart');

module.exports.getProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.cartId)) {
    return res.status(422).json({
      err: null,
      msg: 'cartId parameter must be a valid ObjectId.',
      data: null
    });
  }
  Cart.findById(req.params.cartId).exec(function(err, product) {
    if (err) {
      return next(err);
    }
    if (!product) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product retrieved successfully.',
      data: product
    });
  });
};


module.exports.getProductsByUser = function(req, res, next) {
    if (!Validations.isString(req.params.username)) {
      return res.status(422).json({
        err: null,
        msg: 'username parameter must be a valid string.',
        data: null
      });
    }
    Cart.find({
      seller: req.params.username
    }).exec(function(err, products) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg:
          'Products in ' +
          req.params.username +
          ' retrieved successfully.',
        data: products
      });
    });
};

module.exports.getProductsBelowPrice = function(req, res, next) {
  if (!Validations.isNumber(req.params.price)) {
    return res.status(422).json({
      err: null,
      msg: 'price parameter must be a valid number.',
      data: null
    });
  }
  Cart.find({
    price: {
      $lt: req.params.price
    }
  }).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg:
        'Products priced below ' +
        req.params.price +
        ' retrieved successfully.',
      data: products
    });
  });
};

module.exports.createProduct = function(req, res, next) {
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) and price(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  delete req.body.updatedAt;

  Cart.create(req.body, function(err, product) {
    if (err) {
      return next(err);
    }
    res.status(201).json({
      err: null,
      msg: 'Product was created successfully.',
      data: product
    });
  });
};



module.exports.deleteProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.cartId)) {
    return res.status(422).json({
      err: null,
      msg: 'cartId parameter must be a valid ObjectId.',
      data: null
    });
  }
  Cart.findByIdAndRemove(req.params.cartId).exec(function(
    err,
    deletedProduct
  ) {
    if (err) {
      return next(err);
    }
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product was deleted successfully.',
      data: deletedProduct
    });
  });
};
