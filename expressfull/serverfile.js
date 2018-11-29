const express = require('express');
const bodyParser = require('body-parser');// 文件上传它处理不了
const multer =require('multer');
const pathlib = require('path');
const fs = require('fs');
var server = express();

var objmulter=multer({dest:'./www/upload'}); // 上传保存路径

// server.use(bodyParser.urlencoded({extended:false}));
server.use(objmulter.any());


server.post('/upload',(req,res)=>{
    console.log(req.files); // 读取上传文件
    // 获取原始扩展名
    var newName=req.files[0].path+pathlib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path,newName,(err)=>{
        if(err){
            res.send('上传失败')
        }else{
            res.send('上传成功')
        }
    })
})


server.listen(8080)