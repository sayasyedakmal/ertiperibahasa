const express = require('express');
const mongoose = require('mongoose');
const Peribahasa = require('./models/peribahasa');
const serverRouter = require('./routes/server');

const app = express();
const path = require('path');
const portNumber = 3000;

mongoose.connect('mongodb://localhost:27017/peribahasa').then(() => {
    console.log('mongodb connected');
}).catch(err => console.error(err));

//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
});


var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;

console.log(dateTime)

app.use('/server', serverRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});