const express = require('express');
let router = express.Router();

//middleware
const {auth} = require('../middleware/AuthMiddleware');
//user controller
const {login, register} = require('../Controller/LoginController');
//order controller
const { orderuser, orderstore, orderedit, orderupdate,orderdestroy} = require('../Controller/OrderController');
//brand controller
const {brandindex} = require('../Controller/BrandController');
//category controller
const {categoryindex} = require('../Controller/CategoryController');
//product controller
const {productindex, brandproduct, categoryproduct, productedit} = require('../Controller/ProductController');

//validation 
const {userstorevali, userauthvali} = require('../Validation/UserValidation');
const { ordervali} = require('../Validation/OrderValidation');

//Auth route
router.post('/login',userauthvali,login);
router.post('/register',userstorevali,register);

//brands
router.get('/brand',brandindex);
router.get('/brand/:brandId/product',brandproduct);

//category
router.get('/category',categoryindex);
router.get('/category/:categoryId/product',categoryproduct);

//product
router.get('/product',productindex);
router.get('/product/:id',productedit);

//orders route
router.get('/order',auth,orderuser);
router.post('/order',auth,ordervali,orderstore);
router.get('/order/:id',auth,orderedit);
router.put('/order/:id',auth,ordervali,orderupdate);
router.delete('/order/:id',auth,orderdestroy);

let api = router;

module.exports = api