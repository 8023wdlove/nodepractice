var fs  = require('fs');

fs.writeFile('2.txt','测试写入文件222',function (err){
  if (err){
      console.log('写入失败');
  } 
})
// wrireFile(文件名，内容，回调) // 多次写入会覆盖。。。