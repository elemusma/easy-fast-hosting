var express = require('express');
var bodyParser = require('body-parser');
var robots = require('robots.txt');

var app = express();

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });


// Pass in the absolute path to your robots.txt file
app.use(robots(__dirname + '/robots.txt'))
// template engine
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.render('index');
})
app.use(function(req,res,next){
    res.status(404).render('404');
})

app.listen(3000);