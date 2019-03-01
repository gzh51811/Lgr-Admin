const mongodb = require('./db');
const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('退出')
    console.log('dl');
})

module.exports = Router;