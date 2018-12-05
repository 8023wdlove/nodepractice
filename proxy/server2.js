var express = require("express");
var request = require("request");
const mysql = require('mysql')
// 代理
var app = express();
app.get("/",(req,res)=>{
    var db =mysql.createConnection({host: 'localhost',user:'root',password:'12345678',database:'blog'});
    db.query('SELECT * FROM `banner_table`;',(err,data)=>{
        if(err){
          res.status(500).send('database error').end();
        }else {
          console.log(data)
          res.send(data);
          // res.render('index.ejs', {banners: data})
        }
    })
})
app.listen(3000)