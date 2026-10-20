const express = require('express');

const app = express();

const router = require('./route/route.js');

app.use('/user', () => {
    console.log("routing user");
});

app.use('/',router);



module.exports = app;