const express = require('express');
const routes = express.Router();



routes.get("/register",(req, res)=>{
    res.send("user is registered")
})


module.exports= routes;