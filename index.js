const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedparser = bodyParser.urlencoded({extended:false});

var userInfo =
{
  userLat:"",
  userLong:""

}

app.set('view engine', 'ejs');
app.use('/Assets', express.static('Assets'));
app.use('/Scripts', express.static('Scripts'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function(req,res){
  res.render('index');
});
app.post('/', urlencodedparser, function(req,res)
{
  userInfo.userLat = req.body.userLat;
  userInfo.userLong = req.body.userLong;
  res.send();
});
app.get('/demographicDisplay', function(req,res){

  res.render('demographicDisplay');
});


app.listen(process.env.PORT);
