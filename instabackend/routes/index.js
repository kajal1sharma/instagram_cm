const express = require('express');
const routes = express.Router();



routes.get("/user/register",(req, res)=>{
    res.send("index page")
})


module.exports= routes;