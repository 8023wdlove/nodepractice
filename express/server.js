const express = require('express');
 var server = express();
 server.use('/',(req, res)=>{
   res.writeHead(200,{
      "Content-Type":"text/plain;charset=utf-8"
  });
    res.write('哈哈哈哈哈哈哈');
    res.end();
 })

 server.listen(8080);