const mongodb = require('./db');
const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('goodslist');
})


module.exports = Router;