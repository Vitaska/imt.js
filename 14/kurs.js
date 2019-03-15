var request = require('request');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  } else {
    console.log(error);
  }
});