require('dotenv').config();

var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'images')));

app.use(require('./routes/api'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(process.env.PORT || '8081', function() {
  console.log("Express server listening on port %d in %s mode", process.env.PORT || '8081', app.get('env'));
});

/*var item = document.getElementById("image");
item.addEventListener("mouseover", mouseover, false);
item.addEventListener("mouseout", mouseout, false);

function mouseover()
{
   document.getElementById("text").setAttribute("style", "display:block;")
}

function mouseout()
{
    document.getElementById("text").setAttribute("style", "display:none;")
}*/
