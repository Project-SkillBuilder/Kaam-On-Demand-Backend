const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const adminRouter = require('./routes/admin');
const workerRouter= require('routes/worker');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/worker', workerRouter);
app.use('/user', userRouter);
app.use('/',authRouter);

mongoose.connect('mongodb+srv://shan2318:s2h3a1n8@kod.ej4hw.mongodb.net/collections?retryWrites=true&w=majority')
    .then( result => {
        app.listen(8080);
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

module.exports = app;
