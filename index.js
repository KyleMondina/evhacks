const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedparser = bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');
app.use('/Assets', express.static('Assets'));
app.use('/Scripts', express.static('Scripts'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function(req,res){
  res.render('index');
});

app.listen(process.env.PORT);