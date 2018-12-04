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

// 1解析cookie
  server.use(cookieParser('wthguihh')); 
  // 2使用session
  var arr = [];
  for(var i =  0;i<1000000;i++){
      arr.push("keys"+Math.random());
  }
  server.use(cookieSession({name:'user',keys:arr,maxAge:20*3600*1000}));
  // 3post数据
  server.use(bodyParser.urlencoded({extended:false})); // 解析post 请求
  server.use(multer({dest:'./www/upload'}).any())
  // 用户请求
//   server.use('/',(req,res,next)=>{
//       console.log(req.query,req.body,req.cookies,req.session);
//   })
  // 模板引擎 1、什么模板引擎 
  server.engine('html',consolidate.ejs)
  server.engine('excel',consolidate.jade)
  //2、模板为件在哪 
  server.set('views','./views')
  // 3、输出什么东西
  server.set('view engine','html');
  server.get('/index',(req,res)=>{
    //   if(req.session)
      res.render('1.ejs', {name:'王冬冬'})
  })


  // 4static 数据
  server.use(static('./www'))