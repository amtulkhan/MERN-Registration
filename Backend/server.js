const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Amtul Registered")
})

app.listen(3000,()=>console.log("App at 3000"));