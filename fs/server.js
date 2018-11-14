const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
  var name = './www'+req.url;
  fs.readFile(name,(err,data)=>{
    if(err){
        res.write('error')
    }else{
        res.write(data)
        res.end();
    }
  })
}).listen(8080)