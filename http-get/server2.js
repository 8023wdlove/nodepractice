const http = require('http');
const querystring = require('querystring')
http.createServer((req,res)=>{
    let param ={};
  if (req.url.indexOf('?') !== -1){
    let params = req.url.split('?');
    let url = params[1];
    param = querystring.parse(url);
  } else {
     console.log(res.url)
  }
  console.log(param);
  res.write('love xiao miao')
  res.end();
}).listen(8080);