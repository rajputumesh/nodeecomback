const { check } = require('express-validator');
const categoryvali = [
    check('name','Name is Requried').notEmpty(),
]

module.exports = {
    categoryvali
}