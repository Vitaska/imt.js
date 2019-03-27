var Converter = require('./converter');
var baseCurrencyUs = 27;
var request = require('request');
var express = require ('express');
var app = express();

var converter = new Converter(baseCurrencyUs);

console.log(converter.convertToUa(1000));
console.log(converter.convertToUs(1000));


request('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  } else {
    console.log(error);
  }


app.get('/', function(req, res) {
    res.send(body);
});
app.get('/api/courses/:ccy', function(req, res) {
    console.log(req.param);
    
    var course = body.find(function (course) {
        return course.ccy === req.param.ccy;
    });
    res.send(course);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

});