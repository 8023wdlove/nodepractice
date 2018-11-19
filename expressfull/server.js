const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');// 只能解析数据类 的post
const multer = require('multer');
const ejs = require('ejs');
const jade = require('jade');

var server = express();

server.listen(8080)

// 1解析cookie
  server.use(cookieParser('wthguihh')); 
  // 2使用session
  var arr = [];
  for(var i =  0;i<1000000;i++){
      arr.push("keys"+Math.random());
  }
  server.use(cookieSession({name:'tttuuhihi',keys:arr,maxAge:20*3600*1000}));
  // 3post数据
  server.use(bodyParser.urlencoded({extended:false}));
  server.use(multer({dest:'./www/upload'}).any())
  // 用户请求
  server.use('/',(req,res,next)=>{
      console.log(req.query,req.body,req.cookies,req.session);
  })

  // 4static 数据
  server.use(static('./www'))