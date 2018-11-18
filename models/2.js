const jade = require('jade');
const fs= require('fs');
// var str = jade.renderFile('./views/1.jade',{pretty:true});
var str = jade.renderFile('./views/11.jade',{pretty:true});
console.log(str);
fs.writeFile('./build/2.html',str,(err,data)=>{
    if(err){
        console.log('写入失败')
    }else{
        console.log('写入成功') 
    }
})