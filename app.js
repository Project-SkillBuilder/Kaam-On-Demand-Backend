const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect('mongodb+srv://shan2318:s2h3a1n8@kod.ej4hw.mongodb.net/collections?retryWrites=true&w=majority')
    .then( result => {
        app.listen(8080);
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

module.exports = app;
