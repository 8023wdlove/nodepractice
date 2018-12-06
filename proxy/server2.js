var express = require("express");
var request = require("request");
const mysql = require('mysql')
// 代理
var app = express();
app.get("/api",(req,res)=>{
    var db =mysql.createConnection({host: 'localhost',user:'root',password:'12345678',database:'blog'});
    db.query('SELECT * FROM `banner_table`;',(err,data)=>{
        if(err){
          res.status(500).send('database error').end();
        }else {
          res.setHeader("Cache-Control", "no-store");
          res.send(data);
          // res.render('index.ejs', {banners: data})
        }
    })
    // res.send({ success:'yes',data:"444444"})
})
app.listen(3000)