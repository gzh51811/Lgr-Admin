const mongodb = require('./db');
const express = require('express');
const md5 = require('md5');


const Router = express.Router();


// Router.use(bodyParser.json());//数据JSON类型
// Router.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

Router.get('/', (req, res) => {
    res.render('adminList');
})

Router.get('/add', (req, res) => {
    res.render('adminAdd');
})

Router.get('/edit', (req, res) => {
        res.render('adminEdit');
})

// 用户列表
Router.get('/list', async (req, res) => {
    let findname = await mongodb.find('user', '');
    if (findname.length) {
        res.send({ findname, status: 1 });
    } else {
        res.send({ findname, status: 0 });
    }

})

// 查询用户名是否存在
Router.post('/name', async (req, res) => {

    let name = req.body.username;
    let findname = await mongodb.find('user', { name });
    if (findname.length) {
        res.send({ findname, status: 1 });
    } else {
        res.send({ findname, status: 0 });
    }

})



// 添加管理员
Router.post('/add', (req, res) => {
    // res.render('adminAdd');
    let name = req.body.username;
    let passward = md5(req.body.password);
    let phone = req.body.phone;
    let email = req.body.email;
    let role = req.body.role;  //角色
    let datetime = Date.now();
    let time = setTimes(datetime);
    let static = "0"; //状态 是否启用  0 不启用 ,1启用

    (async () => {
        let findname = await mongodb.find('user', { name });
        if (findname.length) {
            res.send({ findname, status: -1 }); //状态 -1用户已存在
        } else {
            let insertuser = await mongodb.insert('user', { name, passward, phone, email, role, time, static });
            if (insertuser.insertedCount) {
                res.send({ insertuser, status: 1 });
            } else {
                res.send({ insertuser, status: 0 });
            }
        }
    })()

})





/*
 	秒转成时间：xx天xx时xx分xx秒   ：  -
 	setTime(num)
 		* 参数： 秒
 		* 返回值： {}数据返回(灵活一点)
 		
 */

function setTimes(timer) {
    var time = new Date(timer);
    var year = time.getFullYear();//年
    var mon = time.getMonth() + 1;//0 
    var day = time.getDate();//24
    var hour = time.getHours();//时
    var min = time.getMinutes();//分
    var sec = time.getSeconds();//秒
    return year + "-" + mon + "-" + day + "&nbsp; " + hour + ":" + min + ":" + sec;
}

module.exports = Router;