const express = require('express')
const consolidate = require('consolidate');
const ejs = require('ejs')
const fs = require('fs')

var server = express();
server.listen(8080);
server.engine('html',consolidate.ejs)  // 模板引擎 1、什么模板引擎 
server.set('views','./www')   // 文件模板中在哪
server.set('view engine','html');
// var file_name = './www'+path;
server.get('/index.html',(req, res)=>{
        res.render('index.ejs', {name:'王冬冬'})
    })
server.get('/1.txt',(req,res)=>{
    res.setHeader('Content-Disposition','attachment;filename=1.txt');
    res.sendFile('/Users/wangdongdong/demo/nodepractice/download/www/1.txt')
})
server.use(express.static('./www'))