const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');// 只能解析数据类 的post
const multer = require('multer'); // 解析文件上传
const ejs = require('ejs');
const consolidate = require('consolidate');
const mysql = require('mysql');
var server = express();
server.listen(8080)
  server.use(cookieParser('wthguihh')); 
  var arr = [];
  for(var i =  0;i<1000000;i++){
      arr.push("keys"+Math.random());
  }
  server.use(cookieSession({name:'user',keys:arr,maxAge:20*3600*1000}));
  server.use(bodyParser.urlencoded({extended:false})); 
  server.use(multer({dest:'./www/upload'}).any())
  server.engine('html',consolidate.ejs)
  server.set('views','./views')
  server.set('view engine','html');
  server.get('/',(req,res)=>{
    var db =mysql.createConnection({host: 'localhost',user:'root',password:'12345678',database:'blog'});
    db.query('SELECT * FROM `banner_table`;',(err,data)=>{
        if(err){
          res.status(500).send('database error').end();
        }else {
          console.log(data)
          res.render('index.ejs', {banners: data})
        }
    })
  })

  server.use(static('./www'))