const express = require('express');
let router = express.Router();

const {uploadimage} = require('../Helper/uploadimage');
//middleware
const {auth, admin} = require('../middleware/AuthMiddleware');

//all controllers
const {userindex, userstore, useredit, userupdate, userdelete} = require('../Controller/UserController');
const {orderindex} = require('../Controller/OrderController');
const {brandindex, brandstore, brandedit, brandupdate, branddestroy} = require('../Controller/BrandController');
const {categoryindex, categorystore, categoryedit, categoryupdate, categorydestroy} = require('../Controller/CategoryController');
const {productindex, brandproduct, categoryproduct, productstore, productedit, productupdate, productdestroy} = require('../Controller/ProductController');

//validations
const {userstorevali, userupdatevali} = require('../Validation/UserValidation');
const {brandvali} = require('../Validation/BrandValidation');
const {categoryvali} = require('../Validation/CategoryValidation');
const {productvali} = require('../Validation/ProductValidation');

//user routes
router.get('/user',auth,admin,userindex);
router.post('/user',auth,admin,userstorevali,userstore);
router.get('/user/:id',auth,admin,useredit);
router.put('/user/:id',auth,admin,userupdatevali,userupdate);
router.delete('/user/:id',auth,admin,userdelete);

//brands route
router.get('/brand',auth,admin,brandindex);
router.post('/brand',auth,admin,brandvali,brandstore);
router.get('/brand/:id',auth,admin,brandedit);
router.put('/brand/:id',auth,admin,brandvali,brandupdate);
router.delete('/brand/:id',auth,admin,branddestroy);

//Category route
router.get('/category',auth,admin,categoryindex);
router.post('/category',auth,admin,categoryvali,categorystore);
router.get('/category/:id',auth,admin,categoryedit);
router.put('/category/:id',auth,admin,categoryvali,categoryupdate);
router.delete('/category/:id',auth,admin,categorydestroy);

//Product route
router.get('brand/:brandId/product',auth,admin,brandproduct);
router.get('category/:categoryId/product',auth,admin,categoryproduct);
router.get('/product',auth,admin,productindex);
router.post('/product',auth,admin,uploadimage.single('image'),productvali,productstore);
router.get('/product/:id',auth,admin,productedit);
router.put('/product/:id',auth,admin,uploadimage.single('image'),productvali,productupdate);
router.delete('/product/:id',auth,admin,productdestroy);
router.get('/order',auth,admin,orderindex);

let web = router;

module.exports = web;