const express = require('express');
const router = express.Router();


router.get("/login", (req,res)=>{

  res.send("<h1>this ia login route</h1>")
});
router.get("/register", (req,res)=>{

  res.send("<h1>this ia register route</h1>")
});


module.exports = router;