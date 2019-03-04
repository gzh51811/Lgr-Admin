const mongodb = require('./db');
const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('category');
})

Router.get('/cateEdit', (req, res) => {
    res.render('cateEdit');
})



module.exports = Router;