const http = require('http');
const port = 3000;
const hostName = '127.0.0.1'


const myServer = http.createServer((req,res)=>{
res.end('hello first server')

})
myServer.listen(port, ()=>{

console.log(`your server is running on http://${hostName}:${port}`)
});