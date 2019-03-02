const mongodb = require('./db');
const express = require('express');
const Router = express.Router();
Router.get('/', (req, res) => {
    res.render('goodslist');
})

Router.post('/', (req, res) => {
    (async () => {
        let result = await mongodb.find('goodslist');
        console.log(result);
        res.send({ result });
    })();
})
module.exports = Router;