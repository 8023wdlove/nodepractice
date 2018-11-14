var fs  = require('fs');

fs.readFile('1.txt',function (err, data){
  if (err){
      console.log('读取失败');
  } else {
      console.log(data.toString())
  }
})