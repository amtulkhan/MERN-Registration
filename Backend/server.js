const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routeURL = require("./Router/routes");
const cors = require('cors');



dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("db connected"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use('/app',routeURL);



app.listen(3000,()=>console.log("App at 3000"));