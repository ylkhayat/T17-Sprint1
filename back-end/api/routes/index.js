var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  allproductsCtrl = require('../controllers/AllProductsController');
  cartCtrl = require('../controllers/CartController');
  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');




//-------------------------------Cart Routes-----------------------------------

router.get('/cart/getProducts', cartCtrl.getProducts);
router.get('/cart/getProduct/:cartId', cartCtrl.getProduct);
router.get('/cart/getProductsBelowPrice/:price',cartCtrl.getProductsBelowPrice);
router.get('/cart/getProductsByUser/:username',cartCtrl.getProductsByUser);
router.post('/cart/createProduct', cartCtrl.createProduct);
router.delete('/cart/deleteProduct/:cartId', cartCtrl.deleteProduct);
router.delete('/cart/deleteProductsByUser/:username',cartCtrl.deleteProductsByUser);

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);
//-------------------------------All products Routes-----------------------------------
router.get('/allproducts/getProducts', allproductsCtrl.getProducts);
router.get('/allproducts/getProduct/:allproductsId', allproductsCtrl.getProduct);
router.get('/allproducts/getProductsBelowPrice/:price',allproductsCtrl.getProductsBelowPrice);
router.get('/allproducts/getProductsByComponent/:component',allproductsCtrl.getProductsByComponent);
router.get('/allproducts/getProductsBySeller/:seller',allproductsCtrl.getProductsBySeller);
router.post('/allproducts/createProduct', allproductsCtrl.createProduct);
router.patch('/allproducts/updateProduct/:allproductsId', allproductsCtrl.updateProduct);
router.delete('/allproducts/deleteProduct/:allproductsId', allproductsCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);


module.exports = router;
