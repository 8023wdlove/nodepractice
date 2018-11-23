const http = require('http')


var server = http.createServer((req,res)=>{
    console.log(req.url);
    res.write("Hello Word");
    res.end();
    // console.log("链2接");
}).listen(8080);