// 18-05-2026


const http =    require('http');

http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type': 'text/plain'});
   res.end('hello jp!');
}).listen(3000);
