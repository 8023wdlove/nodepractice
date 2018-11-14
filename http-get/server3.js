const http = require('http');
const url = require('url') // url处理参数
http.createServer((req,res)=>{
  let obj = url.parse(req.url,true);
  console.log(obj.pathname,obj.query)
  res.write('love xiao miao')
  res.end();
}).listen(8080);