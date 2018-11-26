const mysql = require('mysql')

// 1.连接
// createConnection (那台服务器,用户名,密码 ,库)
var db = mysql.createConnection({host:'localhost',user:'root',password:'12345678',database:'users'});

// 2 查询
// query(干啥，回调)
db.query('SELECT * FROM `userinfo`;', (err, data)=>{
  if(err){
    console.log('error', err);
  } else {
    console.log('success');
    console.log(JSON.stringify(data));
  }
})