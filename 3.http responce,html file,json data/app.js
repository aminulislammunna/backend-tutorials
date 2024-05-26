const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');
app.use("/api/user",userRouter);

app.use("/register" , (req,res)=>{
//res.status(200).json({
 // "messege": "i am register page",
//statusCode : 200
//})
//res.redirect("/login")

res.statusCode = 200;
res.sendFile(__dirname+ "/views/register.html")

});

app.get("/login" , (req,res)=>{
res.cookie("name", "nikola");
res.cookie("age" , "46");
res.clearCookie("name");
res.append("id", "10232323")
res.end();
});


app.use("/", (req,res)=>{

res.statusCode = 200;
res.sendFile(__dirname + "/views/index.html")
});

app.use((req,res)=>{
res.send("this is a invalid route")

})
module.exports = app;