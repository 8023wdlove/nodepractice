const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const jade = require('jade');

var server = express();

server.listen(8080)

// 解析cookie
  server.use(cookieParser('wthguihh'));



  // 使用session
  var arr = [];
  for(var i =  0;i<1000000;i++){
      arr.push("keys"+Math.random());
  }
    
  server.use(cookieSession({name:'tttuuhihi',keys:arr,maxAge:20*3600*1000}));

  // post数据

  server.use(bodyParser.urlencoded({extended:false}));

  // static 数据
  server.use(static('./www'))