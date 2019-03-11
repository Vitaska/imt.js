var fs = require('fs');

// Read file
fs.readFile('data.txt', 'utf-8', function(err, data) {
     if (err) throw err;
     console.log(data);
   });


//  Write file
//  fs.writeFile ('data.txt', 'Home task 12!', function(err, data) {
//    if (err) throw err;
//    console.log(data);
//  });

// Write file with new col
fs.appendFile ('data.txt', '\nHome task 12!', function(err, data) {
  if (err) throw err;
  console.log(data);
});

