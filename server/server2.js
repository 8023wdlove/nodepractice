const http = require('http')


var server = http.createServer((req,res)=>{
    console.log(req.url,888);
    switch (req.url)
    {
       case '/':
       res.write("Hello Word");
       break;
       case '/1.html':
       res.write("11111");
       break;
       case '/2.html':
       res.write("2222");
       break;
       default:
       res.write("404");
    }
    res.end();
    // console.log("链2接");
}).listen(8080);