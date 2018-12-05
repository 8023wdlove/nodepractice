var express = require("express");
var request = require("request");
// 代理
var app = express();
app.get("/",(req,res)=>{
    // cors
    res.append("Access-Control-Allow-Origin","*");
    // request.get("https://m.weibo.cn/api/container/getIndex?containerid=102803&openApp=0",(err,response,body)=>{
    //     console.log(body);
    //     res.send(body);
    // })
    req.pipe(request("https://m.weibo.cn/api/container/getIndex?containerid=102803&openApp=0")).pipe(res);
})
app.listen(8080)