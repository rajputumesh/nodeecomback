module.exports = (sequelize, DataTypes) =>{
    const UserModel = sequelize.define("users",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name:DataTypes.STRING,
        role:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue:2
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:DataTypes.STRING
    });
    return UserModel;
}