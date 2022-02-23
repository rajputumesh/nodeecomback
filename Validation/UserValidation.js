const { check } = require('express-validator');
const userstorevali = [
    check('name','Name is Requried').notEmpty(),
    check('phone','Phone is Requried').notEmpty(),
    check('email','Email is Requried or already exist').notEmpty(),
    check('pass','Password must be in 6 charactors').isLength({min:6})
]

const userupdatevali = [
    check('name','Name is Requried').notEmpty(),
    check('phone','Phone is Requried').notEmpty(),
    check('email','Phone is Requried').notEmpty()
]

const userauthvali = [
    check('email','Email is Requried').notEmpty(),
    check('password','Password Requried').notEmpty()
]

module.exports = {
    userstorevali,
    userupdatevali,
    userauthvali
}
