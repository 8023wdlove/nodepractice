const express = require('express')
const consolidate = require('consolidate');
const multer =require('multer');
const pathlib = require('path');
const ejs = require('ejs')
const fs = require('fs')

var server = express();
server.listen(8080);
server.engine('html',consolidate.ejs)  // 模板引擎 1、什么模板引擎 
server.set('views','./www')   // 文件模板中在哪
server.set('view engine','html');
server.get('/index.html',(req, res)=>{
        res.render('index.ejs', {name:'王冬冬'})
    })
server.get('/1.txt',(req,res)=>{
    res.setHeader('Content-Disposition','attachment;filename=1.txt');
    res.sendFile('/Users/dongdongwang/demo/nodep/download/www/download/崔天琪 - 放过.mp3')
})

var objmulter=multer({dest:'./www/upload'}); // 上传保存路径

// server.use(bodyParser.urlencoded({extended:false}));
server.use(objmulter.any());


server.post('/upload',(req,res)=>{
    console.log(req.files); // 读取上传文件
    // 获取原始扩展名
    // var newName=req.files[0].path+pathlib.parse(req.files[0].originalname).ext;
    var newName=req.files[0].destination+'/'+req.files[0].originalname;
    fs.rename(req.files[0].path,newName,(err)=>{
        if(err){
            res.send('上传失败')
        }else{
            res.send('上传成功')
        }
    })
})
server.use(express.static('./www'))