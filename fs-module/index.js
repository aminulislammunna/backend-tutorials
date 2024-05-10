const fs = require('fs');

fs.readFile('text.txt','utf-8' ,(data,err)=>{
if(err){
  console.log(err)
}else{
  console.log(data)
}
})
// Also try with this
//writeFile
//appendFile
//deletFile
