const express= require('express');

var server = express();
 
// 目录1:/user/
 var routeUser = express.Router();

 routeUser.get('/1.html',(req,res)=>{
     res.send('user1');
 })
 routeUser.get('/2.html',(req,res)=>{
    res.send('user2');
})
server.use('/user',routeUser)


var articleUser = express.Router();

articleUser.get('/1.html',(req,res)=>{
     res.send('1111111');
 })
 articleUser.get('/2.html',(req,res)=>{
    res.send('2222222');
})
server.use('/article',articleUser)
server.listen(8080)
