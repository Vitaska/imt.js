First home work

var http = require('http');
var port = 3000;
var fs = require('fs');

http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/') {
    res.write ('Hello World!');
    res.end();
  } else if (req.url === '/about') {
    console.log(req);
    res.write ('Code in console');
    res.end();
  } else if (req.url === '/contact') {
          fs.readFile('index.html', function (err, data) {
              if (err) throw err;
              res.write(data);
              res.end();
          });
  
  } else {
    console.log(req.url);
    res.write ('Ok!');
    res.end();
  }
}).listen(port, function () {
  console.log('Server at http://localhost:3000');
});
