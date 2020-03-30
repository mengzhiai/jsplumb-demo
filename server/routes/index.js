/*
 * @Author: your name
 * @Date: 2019-12-18 09:51:40
 * @LastEditTime : 2019-12-18 09:55:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jsplumb\server\routes\index.js
 */
var express = require('express');
var router = express.Router();

//引入公用模块
const baseModule = require('../util/base');

//sql模块
const $sql = baseModule.$sql;
//连接池
const pool = baseModule.pool;

/* GET home page. */
router.get('/aaa', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render({
    data: {
      list: ['a']
    }
  })
});

module.exports = router;
