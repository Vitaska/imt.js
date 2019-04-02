var express = require('express');
var app = express();
var nodemailer = require("nodemailer")
var bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function (req, res) {
    res.render('index', {title: 'Главная'});
});

app.get('/api/onas', function (req, res) {
    res.render('onas', { title: 'О нас'});
});

app.get ('/api/contact', function (req, res) {
    res.render('contact', {title: 'Контакты'});
    contact.push(course);
    res.redirect('/api/contact');
});
app.get ('/api/contact/add', function (req, res) {
    res.render('add');
});

app.post('/api/contact/add', function (req, res) {
    var contact = {
        name: req.body.name,
        tel: req.body.tel,
        mail: req.body.mail
    };
    courses.push(course);
    res.redirect('/api/contact');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mr.vitaska@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'mr.vitaska@gmail.com',
  to: 'mr.vitaska@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
});

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


app.listen(3000, function () {
    console.log('app listening at localhost:3000');
    
})