const express = require('express');
 var server = express();
 server.use('/b.html',(req, res)=>{
   res.writeHead(200,{
      "Content-Type":"text/plain;charset=utf-8"
  });
    res.write('b哈哈哈哈哈哈哈');
    res.end();
 })
 server.use('/a.html',(req, res)=>{
   console.log(3333);
//    res.writeHead(200,{
//       "Content-Type":"text/plain;charset=utf-8"
//   });
    res.send([{
      id: '12987122',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987123',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987125',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987126',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }]); // send 方法添加了可以直接发送对象
    res.end();
 })

 server.listen(8090);