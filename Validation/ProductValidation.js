const { check } = require('express-validator');
const productvali = [
    check('name','Name is Requried').notEmpty(),
    check('brandId','Brand is Requried').notEmpty(),
    check('categoryId','Category is Requried').notEmpty(),
    check('price','Price is Requried').notEmpty(),
    check('salePrice','Sale Price is Requried').notEmpty(),
    check('description','Description is Requried').notEmpty(),
    check('shortDescription','Short Description is Requried').notEmpty(),
]

module.exports = {
    productvali
}