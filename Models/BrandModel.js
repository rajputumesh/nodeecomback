module.exports = (sequelize, DataTypes) =>{
    const BrandModel = sequelize.define("brands",{
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
    return BrandModel;
}