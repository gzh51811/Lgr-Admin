const mongodb = require('./db');
const express = require('express');
const md5 = require('md5');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('login');
})

// 登录查询用户是否匹配
Router.post('/', (req, res) => {
    let name = req.body.name;
    let passward = md5(req.body.password);

    (async () => {
        let resultname = await mongodb.find('user', { name });
        let result = await mongodb.find('user', { name, passward });
        if (resultname == '') {
            res.send({ result, status: -1 });
        } else if (result.length == '1') {
            res.send({ result, status: 1 });
        } else if (result.length == '0') {
            res.send({ result, status: 0 });
        }

    })()
})

module.exports = Router;