//npm init -y
// npm i nodemon 
// "start":"nodemon index.js"



const http = require('http');
const fs = require('fs')
const port = 3000;
const hostName = '127.0.0.1'



myServer = http.createServer((req,res)=>{
const handleReadFile = (statusCode, fileLocation)=>{
  fs.readFile(fileLocation, (err,data)=>{
    res.writeHead(statusCode, {"Content-Type":"text/html"});
    res.write(data);
    res.end();
      });
}



if(req.url === '/'){
 handleReadFile(200,'./views/index.html')
}

else if(req.url === '/about'){
  handleReadFile(200,'./views/about.html')

}
else if(req.url === '/contact'){
  handleReadFile(200,'./views/contact.html')

}

else{
  handleReadFile(200,'./views/error.html')

}



});

myServer.listen(port,hostName,()=>{
  console.log(`your server is running on http://${hostName}:${port}`)})
