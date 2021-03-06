const db = require('../Models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = db.UserModel;
const { validationResult } = require('express-validator');

//Register user data
const register = async (req, res)=>{
    const {name, phone, email, pass}  = req.body;
    const password = await bcrypt.hash(pass, 10);
    console.log('password ',password);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    await Users.create({name, phone, email, password})
    .then(data => {
        var token = jwt.sign(
        {
            name:data.name,
            email:data.email,
            id:data.id,
            role:data.role
        },'secret',
        {
            expiresIn:"1h"
        });
        res.json({
            token:token,
            data:{
                id:data.id,
                name:data.name,
                email:data.email,
                phone:data.phone
            }
        }).status(200);
    })
    .catch(err => {
      res.status(500).send({
        message:err.message
      });
    });
}
 
//Login user
const login = async (req, res)=>{
    const {email, password}  = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    await Users.findAll({ where:{ email:email } })
    .then(async (data) => {
        if(data.length > 0){
            await bcrypt.compare(password, data[0].password)
            .then(function(result) {
                console.log(result);
                if(result){
                    var token = jwt.sign(
                    { 
                        name:data[0].name,
                        email:data[0].email,
                        id:data[0].id,
                        role:data[0].role
                    },'secret',
                    {
                        expiresIn:"1h"
                    });
                    res.status(200).send({
                        message:"login success",
                        token:token
                    });
                }else{
                    res.status(201).send({
                        message:"Password not match"
                    });
                }
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message:err.message
        });
    });
}

module.exports = {
    register,
    login
}