const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routeURL = require("./Router/routes");



dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("db connected"));

app.use("/app",routeURL);

app.get("/",(req,res)=>{
    res.send("Amtul Registered")
})

app.listen(3000,()=>console.log("App at 3000"));