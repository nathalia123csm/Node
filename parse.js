var url = require('url');
var adr = 'http://localhost:8080';
var q = url.parse(adr, true);

console.log(q.host);//returns 'localhost: 8080'
console.log(q.pathname);//returns '/default.htm'
console.log(q.search); //returns 'year=2017&month=februery
console.log('Brasil 3 X 1 Croacia');

var qdata = q.query;
console.log(qdata.mes);