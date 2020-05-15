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
    res.render('index', {
        title: 'Easy Fast Hosting | Best Hosting Option',
        content: 'Get the cheapest & fastest hosting available. Starting at $5.95/mo. For the GrowBig plan, you get unlimited websites.'
    });
})
app.use(function(req,res,next){
    res.status(404).render('404', {
        title: '404 Page Not Found | Best Hosting Option',
        content: '404 page not found. Please go back to the homepage and double-check the URL.'
    });
})

app.listen(3000);