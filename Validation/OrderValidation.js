const { check } = require('express-validator');
const ordervali = [
    check('address','Address is Requried').notEmpty(),
    check('qty','Phone is Requried').notEmpty(),
    check('totalAmount','Total Amount is Requried').notEmpty(),
    check('cartItem','cart Items is Requried').notEmpty(),
]

module.exports = {
    ordervali
}