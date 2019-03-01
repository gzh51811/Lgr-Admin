
const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');

// 路由
const loginRouter = require('./login.js');
const indsRouter = require('./inds.js');
const loginoutRouter = require('./loginout.js');
const adminListRouter = require('./adminList.js');

Router.use(bodyParser.json());//数据JSON类型
Router.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据


Router.use('/login', loginRouter); //调到登录
Router.use('/index', indsRouter); //调到首页
Router.use('/adminList', adminListRouter); //调到首页
Router.use('/loginout', loginoutRouter);  //退出



module.exports = Router;































// async function _insert() {
//     let ws = await mongodb.insert('user', { name: 'xosdfsdf', age: 100 });
//     console.log(ws);
// }

// async function _select() {
//     let ws = await mongodb.find('user', {});
//     console.log(ws);
// }
// async function _update() {
//     let ws = await mongodb.update('user', { age: 100 }, { $set: { age: '10' } });
//     console.log(ws);
// }
// async function _delete() {
//     let ws = await mongodb.delete('user', { age: { $gt: 18 } });
//     console.log('del' + ws);
// }

// _select();