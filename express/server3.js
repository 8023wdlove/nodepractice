const express =  require('express');
const expressstatic = require('express-static');
let server  = express();
server.listen(8080);
var users ={
    'wangdongdong':'lovexiaomiao',
    'zhangsan':'zhangsan',
    'lisi':'lisi'
}
server.get('/login',(req,res)=>{
    var user=req.query['user'];
    var pass =req.query['pass'];
    if(users[user]==null){
        res.send({'ok':false,'message':'此用户不存在'});
    }else{
        if(users[user]!=pass){
            res.send({'ok':false,'message':'密码错了'});
        }else{
            res.send({'ok':true,'message':'登陆成功'})
        }

    }
})
server.use(expressstatic('./www'));