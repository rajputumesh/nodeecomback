const { Sequelize} = require('sequelize');

const sequelize =new Sequelize('mynodedb','root','mysql@123',{
    host:'localhost',
    logging:false,
    dialect:'mysql',
    pool:{max:5,min:0,idle:10000}
});

sequelize.authenticate()
.then(()=>{
    console.log('Connected');
})
.catch(err=>{
    console.log('error ',err);
});
module.exports= {
    sequelize
};
