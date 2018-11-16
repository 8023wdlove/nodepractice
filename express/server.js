const express = require('express');
 var server = express();
 server.use('/b.html',(req, res)=>{
   res.writeHead(200,{
      "Content-Type":"text/plain;charset=utf-8"
  });
    res.write('b哈哈哈哈哈哈哈');
    res.end();
 })
 server.use('/a.html',(req, res)=>{
//    res.writeHead(200,{
//       "Content-Type":"text/plain;charset=utf-8"
//   });
    res.send('a哈哈哈哈哈哈哈哈及斤斤计较斤斤计较哈哈');
    res.end();
 })

 server.listen(8080);