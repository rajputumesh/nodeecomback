const db = require('../Models');
const Product = db.ProductModel;
const Category = db.CategoryModel;
const Brand = db.BrandModel;

const { validationResult } = require('express-validator');


//get all Product
const productindex = async (req, res)=>{
  await Product.findAll({
      attributes:['id','name', 'categoryId', 'brandId' ,'price', 'saleprice', 'image'],
      include:[ Category , Brand ]
  })
  .then(data => {
    res.json(data).status(200);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Opps: somthing wrong."
    });
  });
}

//brand product
const brandproduct = async (req, res)=>{
    await Product.findAll({
            attributes:['id','name','price','salePrice','image'],
            include:[ Category , Brand ],
            where:{brandId:req.params.brandId}
        })
        .then(data => {
        res.json(data).status(200);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Opps: somthing wrong."
        });
        });
  }

//category product
const categoryproduct = async (req, res)=>{
    await Product.findAll({
            attributes:['id','name','price','salePrice','image'],
            include:[ Category , Brand ],
            where:{categoryId:req.params.categoryId}
        })
    .then(data => {
      res.json(data).status(200);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Opps: somthing wrong."
      });
    });
  }

//store Brand data
const productstore = async (req, res)=>{
    const {name, brandId, categoryId, price, salePrice, description, shortDescription}  = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    await Product.create({name, brandId, categoryId, price, salePrice, description, shortDescription})
    .then(data => {
      res.json(data).status(200);
    })
    .catch(err => {
      res.status(500).send({
        message:err.message
      });
    });
}

//get single Brand
const productedit = async (req, res)=>{
    await Product.findByPk(req.params.id,{
      attributes:['id','name'],
      include:[ Category , Brand ]
    })
    .then(data => {
        res.json(data).status(200);
    })
    .catch(err => {
        res.status(500).send({
        message:err.message
        });
    });
}

//update Brand data
const productupdate = async (req, res)=>{

    const id = req.params.id;
    const params  = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json(400).json({ errors: errors.array() });
    }

    await Product.update(params, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.json({
          message: "Product Updated"
        });
      } else {
        res.json({
          message: "Product Not Found"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
}

//delete
const productdestroy = async (req, res)=>{
    const id = req.params.id;
    await Product.destroy({
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.json({
          message: "Product Deleted"
        });
      } else {
        res.json({
          message: "Product Not Found"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
}

module.exports = {
  productindex,
  brandproduct,
  categoryproduct,
  productstore,
  productedit,
  productupdate,
  productdestroy
}

