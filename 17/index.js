var Converter = require('./converter');
var baseCurrencyUs = 27;
var request = require('request');

var converter = new Converter(baseCurrencyUs);

console.log(converter.convertToUa(1000));
console.log(converter.convertToUs(1000));


request('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  } else {
    console.log(error);
  }
});