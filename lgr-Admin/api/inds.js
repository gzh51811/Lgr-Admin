const mongodb = require('./db');
const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('index');
})

Router.get('/welcome', (req, res) => {
    res.render('welcome');
})

// 查询用户信息
Router.post('/', async (req, res) => {
    let name = req.body.name;
    let findname = await mongodb.find('user', { name });
    if (findname.length) {
        res.send({ findname, status: 1 });
    } else {
        res.send({ findname, status: 0 });
    }



})


module.exports = Router;