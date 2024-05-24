const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');
app.use("/api/user",userRouter);

app.use("/", (req,res)=>{

  res.send("<h1>this ia home route</h1>")
});

app.use((req,res)=>{
res.send("this is a invalid route")

})
module.exports = app;