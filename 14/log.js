var Event = require('events').EventEmitter;
var eat = new Event();

eat.on ('Login', function () {
    console.log('You login:');
});
eat.on ('Logout', function () {
  setTimeout(function() {
    console.log('User logouy is ...');
  }, 3000 );
  
});
eat.on ('someAction', function () {
  console.log('User ');
});

eat.emit('Login');
eat.emit('Logout');
