const express = require('express');
const app = express();
const PORT =3000;

//app.get('/',(req,res)=>{
/*
eivebeo lekha jay
const id = req.query.id;
const name = req.query.name;*/
//const {id,name} = req.query;

//res.send(`student id is ${id} and name is ${name}`)
//} );

app.get('/userId/:id/userAge/:age' , (req,res)=>{

const id = req.params.id;
const age = req.params.age;
res.send(`student id is ${id} and age is ${age}`)


})

app.listen(PORT , ()=>{
  console.log(`your server is running on http://localhost:${PORT}`)
})