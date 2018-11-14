const http = require('http');
http.createServer((req,res)=>{
    var str='';
    var i = 0;
    req.on('data',function (data){
        console.log(`第${i++}次发送数据`);
        str+= data;
    })
    req.on('end',function(){
        //console.log(str)
        res.write('SUCCESS!!!')
        res.end();
    })
}).listen(8080);