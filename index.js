// var a = 'Hello world';
// console.log(a);

// var fs = require('fs');
// console.log(fs);

// Read sync
// var fs = require('fs');
// var data = fs.readFileSync('data.txt', 'utf-8');
// console.log(data);

var fs = require('fs');

fs.readFile('data.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    console.log(data);
  });