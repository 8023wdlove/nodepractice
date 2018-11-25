const express = require('express')
const fs = require('fs')

var server = express();
server.listen(8080);
// var file_name = './www'+path;
server.get('/index.html',(req, res)=>{
    var name = './www'+req.url;
    fs.readFile(name,(err,data)=>{
      if(err){
          res.send('error')
      }else{
          res.write(data)
      }
    })
    res.end();
    })
// server.get('/1.txt',(req,res)=>{
//     res.setHeader('Content-Disposition','attachment;filename=1.txt');
//     res.sendFile('/Users/wangdongdong/demo/nodepractice/download/www/1.txt')
// })
server.use(express.static('./www'))