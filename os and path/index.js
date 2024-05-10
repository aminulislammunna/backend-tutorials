/*
const os = require('os');
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem())console.log(os.freemem());

*/

/*
const {totalmem , freemem} = require('os')
console.log(totalmem())
*/

/*console.log(__dirname);
console.log(__filename);
*/
const path= require('path');
//const extentionName = path.extname("index.html")
//console.log(extentionName);
const joinName = path.join(__dirname + "/../views");
console.log(joinName)
