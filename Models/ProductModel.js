module.exports = (sequelize, DataTypes) =>{
    const ProductModel = sequelize.define("products",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name:DataTypes.STRING,
        brandId:DataTypes.BIGINT,
        categoryId:DataTypes.BIGINT,
        price:DataTypes.FLOAT,
        salePrice:DataTypes.FLOAT,
        image:{
            type:DataTypes.STRING,
            defaultValue:'demopro.png'
        },
        description:DataTypes.TEXT,
        shortDescription:DataTypes.STRING,
        status:{
            type:DataTypes.INTEGER,
            defaultValue:1
        }
    });

    return ProductModel;
}