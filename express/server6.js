const express = require('express');
const querystring = require('querystring');// 原生提供

var server = express();
server.listen(8080);
server.use((req,res,next)=>{
    var str= '';
    req.on('data',data=>{
        str+=data;
    })
    req.on('end',()=>{
        req.body=querystring.parse(str);
        next();
    })
    
})
server.use('/',(req,res,next)=>{
    console.log(req.body);
})
