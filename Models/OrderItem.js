module.exports = (sequelize, DataTypes) =>{
    const OrderItem = sequelize.define("orderitems",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        orderId:DataTypes.BIGINT,
        productId:DataTypes.BIGINT,
        qty:DataTypes.INTEGER,
        price:DataTypes.FLOAT,
        salePrice:DataTypes.FLOAT
    });
    return OrderItem;
}