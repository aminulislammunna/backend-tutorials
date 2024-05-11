const http = require('http');
const port = 3000;
const hostName= '127.0.0.1'
myServer=http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type':'text/html'})
  res.write("<h1>hello</h1>")
res.end();
})
myServer.listen(port, hostName, ()=>{
  console.log(`your server is runung on http://${hostName}:${port}`);
});