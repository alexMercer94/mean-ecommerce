'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose');

const app = express();
const port = process.env.PORT || 4201;

moongose.connect('mongodb://127.0.0.1:27017/ecommerce', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log('Server started ' + port);
        });
    }
});

module.exports = app;
