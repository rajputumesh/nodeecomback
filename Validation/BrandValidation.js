const { check } = require('express-validator');
const brandvali = [
    check('name','Name is Requried').notEmpty(),
]

module.exports = {
    brandvali
}