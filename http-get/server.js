const http = require('http');
http.createServer((req,res)=>{
    let param ={};
    if (req.url.indexOf('?')!== -1) {
        let params = req.url.split('?');
        let url = params[0];
        let params2 = params[1].split('&');
        for (let i= 0;i<params2.length;i++){
            let param3 =params2[i].split('=');
            param[param3[0]]=param3[1];
        }
    }else{
        var url2 = req.url;
    }
    console.log(param,99999)
    res.write("get it!");
    res.end();
}).listen(8080)