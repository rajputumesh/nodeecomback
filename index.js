const express = require('express');
const app = express();
const db = require('./Models');
db.sequelize.sync({force:false});

const bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const port = process.env.PORT || 5000;
app.set('view engine','ejs');
app.get('/',(req, res)=>{
    res.render('base',{title:"My Node App"});
});

//admin routes
let web = require('./Route/web');
app.use('/',web);

//api routes
let api = require('./Route/api');
app.use('/api',api);

app.listen(port);