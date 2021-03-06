const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');
var user= {};
http.createServer((req,res)=>{
    // GET 
    res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8"
    });
    let obj = url.parse(req.url,true);
    let path = obj.pathname;
    let param = obj.query;

    // 区分访问文件还是文件
    var str = '';
    req.on('data',(data)=>{
        str+=data;
    })
    req.on('end',()=>{
        const POST = querystring.parse(str);
        console.log(path,param,POST,str)
        var file_name = './www'+path;
        if (path=='/user'){  // 接口的访问
            switch(param.act){
                case 'reg':
                    if(user[param.user]){
                        res.write(`{'ok':false,msg:'用户已存在'}`)
                    }else {
                        user[param.user]=param.pass;
                        res.write(`{
                            'ok':true,msg:'注册成功'
                        }`)
                    }
                    break;
                case 'login':
                    if (user[param.user]==null){
                        res.write(`{
                            'ok':false,msg:'用户不存在'
                        }`)
                    } else if(user[param.user] !== param.pass){
                        res.write(`{ 
                            'ok':false,msg:'用户名或密码错误'
                        }`)
                    } else {
                        res.write(`{ 
                            'ok':true,msg:'登陆成功'
                        }`)
                    }
                    break;
                default:
                    res.write(`{ 
                        'ok':false,msg:'未知动作'
                    }`)
            }
            res.end();

        }else {
        fs.readFile(file_name,(err,data)=>{
            if(err){
                res.write('NOT FOUND');
            } else{
                res.write(data);
            }
            res.end(); 
            })
        }
    })

}).listen(8080);