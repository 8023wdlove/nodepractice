const ejs = require('ejs');
var str = ejs.renderFile('./views/2.ejs',{name:'王冬冬'},(err, data)=>{
    if(err){
        console.log('编译失败');
    }else{
        console.log(data)
    }
});
console.log(str);