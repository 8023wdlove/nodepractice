const express = require('express');
 var server = express();
//  server.use('/b.html',(req, res)=>{
//    res.writeHead(200,{
//       "Content-Type":"text/plain;charset=utf-8"
//   });
//     res.write('b哈哈哈哈哈哈哈');
//     res.end();
//  })
//  server.use('/a.html',(req, res)=>{
// //    res.writeHead(200,{
// //       "Content-Type":"text/plain;charset=utf-8"
// //   });
//     res.send({a:12,b:15}); // send 方法添加了可以直接发送对象
//     res.end();
//  })
server.get('/',function(req,res){

        res.write("GET"+req.url);
        res.end();
   })
   server.post('/',function(req,res){
    res.write("POST"+req.url);
    res.end();
})

 server.listen(8080);