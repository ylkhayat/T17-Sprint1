var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  allproductsCtrl = require('../controllers/AllproductsController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


  //-------------------------------Allproduct Routes-----------------------------------

  router.get('/allproducts/getProducts', allproductsCtrl.getProducts);
  router.get('/allproducts/getProduct/:allproductsId', allproductsCtrl.getProduct);
  router.post('/allproducts/createProduct', allproductsCtrl.createProduct);
  router.get(
    '/allproducts/getProductsBySeller/:seller',
    allproductsCtrl.getProductsBySeller
  );

  router.get(
    '/allproducts/getProductsByComponent/:component',
    allproductsCtrl.getProductsByComponent
  );
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


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
