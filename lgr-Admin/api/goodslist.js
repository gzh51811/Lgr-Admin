const mongodb = require('./db');
const express = require('express');
const mongoose = require('mongoose');
const Router = express.Router();
Router.get('/', (req, res) => {
    res.render('goodslist');
})

Router.get('/addgoods', (req, res) => {
    res.render('addgoods');
})

Router.post('/', (req, res) => {
    (async () => {
        let result = await mongodb.find('goodslist');
        res.send({ result });
    })();
})

Router.post('/add', async (req, res) => {
    // console.log(req.body);
    let goodsname = req.body.goodsname;
    let classa = req.body.classa;
    let opirce = req.body.opirece;
    let ppirce = req.body.ppirece;
    let stuck = req.body.stuck;
    let time = req.body.time;
    let state = req.body.state;
    let inserts = await mongodb.insert("goodslist", { goodsname, "class": classa, opirce, ppirce, stuck, time, state });
    if (inserts.insertedCount) {
        res.send('1');
    } else {
        res.send('0');
    }
});
Router.get('/delete', async (req, res) => {
    let id = mongoose.Types.ObjectId(req.query.id);
    let _res = await mongodb.delete('goodslist', { "_id": id });
    if (_res.deletedCount) {
        res.send('1');
    } else {
        res.send('0');
    }
});
module.exports = Router;