const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');
http.createServer((req,res)=>{
    // GET 
    let obj = url.parse(req.url,true);
    let path = obj.pathname;
    let param = obj.query;

    // POST
    var str = '';
    req.on('data',(data)=>{
        str+=data;
    })
    req.on('end',()=>{
        const POST = querystring.parse(str);
        console.log(path,param,POST,str)
        var file_name = './www'+path;
        fs.readFile(file_name,(err,data)=>{
            if(err){
                res.write('NOT FOUND');
            } else{
                res.write(data);
            }
            res.end(); 
        })
    })

}).listen(8080);