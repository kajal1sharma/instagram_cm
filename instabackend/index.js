const express = require('express');
const userRoutes = require("./routes/user");
const index = require("./routes/index")
const app = express();


app.use("/user",userRoutes);
app.use("/",index)

app.listen(3000)