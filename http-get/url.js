const url = require('url');
var obj1 =url.parse('http://www.wanghouyusheng.com/index?a=66&b=888');
console.log(obj1)
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.wanghouyusheng.com',
//     port: null,
//     hostname: 'www.wanghouyusheng.com',
//     hash: null,
//     search: '?a=66&b=888',
//     query: 'a=66&b=888',
//     pathname: '/index',
//     path: '/index?a=66&b=888',
//     href: 'http://www.wanghouyusheng.com/index?a=66&b=888' }


var obj2 =url.parse('http://www.wanghouyusheng.com/index?a=66&b=888',true);
console.log(obj2.pathname,obj2.query)
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.wanghouyusheng.com',
//     port: null,
//     hostname: 'www.wanghouyusheng.com',
//     hash: null,
//     search: '?a=66&b=888',
//     query: { a: '66', b: '888' },
//     pathname: '/index',
//     path: '/index?a=66&b=888',
//     href: 'http://www.wanghouyusheng.com/index?a=66&b=888' }