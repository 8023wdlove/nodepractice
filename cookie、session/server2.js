const express = require('express');
const cookieParser = require('cookie-parser'); // session 需要cookie
const cookieSession = require('cookie-session');
var server = express();

// cookie  
server.use(cookieParser());
server.use(cookieSession({
    keys:['www','eeeee','tyyyy'], // session 秘钥
    name:'wangdong',
    maxAge:2*3600*1000// 有效期
}));
server.use('/',(req,res)=>{ // cookie 加密
    if (req.session['count']== null){
        req.session['count'] = 1;
    }else {
        req.session['count']++;
    }
    console.log(req.session);
    delete req.session // 删除session
    res.send('OK');
})
server.listen(8080);