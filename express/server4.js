const express = require('express');
// const expresstatic = require('express-static');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);
// server.use(expresstatic('./www'));
server.use(bodyParser.urlencoded({ // 用于给post封装body
    extended: true, //扩展模式
    limit: 2*1024*1024 // 限制-2M
}));
server.use('/',(req,res)=>{
    console.log(req.body);
})

// res.query(); // GET
// res.body();  // POST