const express = require('express');
const cookieParser = require('cookie-parser');
var server = express();

// cookie
server.use(cookieParser('xiaomiao'));
// server.use('/',(req,res)=>{
//     console.log(req.cookies);
//     res.cookie('user','wangdongdong',{path:'/aaa',maxAge:30*24*3600*1000});
//     res.send('OK');
// })
// server.use('/',(req,res)=>{ // cookie 加密
//     console.log(req.signedCookies);
//     console.log(req.cookies);
//     req.secret ='xiaomiao'; // 秘钥
//     res.cookie('user','wangdongdong',{signed:true}); // 签名，可以做到篡改
//     res.send('OK');
// })
server.use('/',(req,res)=>{ // cookie 加密
    console.log(req.signedCookies);
    console.log(req.cookies);
    res.clearCookie('user');//删除cookie
    res.send('OK');
})
server.listen(8080);