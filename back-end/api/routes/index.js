var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  allproductsCtrl = require('../controllers/AllProductsController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


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
