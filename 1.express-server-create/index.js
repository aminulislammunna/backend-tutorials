//npm init -y
// npm i exxpress nodemon


const app = require('./app');
const PORT = 3000;


app.listen(PORT, ()=>{

console.log(`your server is running on http://localhost:${PORT} successfully`)

});