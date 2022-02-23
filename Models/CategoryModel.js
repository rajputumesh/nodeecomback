module.exports = (sequelize, DataTypes) =>{
    const CategoryModel = sequelize.define("categories",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name:DataTypes.STRING,
        status:{
            type:DataTypes.INTEGER,
            defaultValue:1
        }
    });

    return CategoryModel;
}