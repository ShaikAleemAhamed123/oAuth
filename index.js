const express = require("express");
const mongoose = require('mongoose');
const keys = require("./config/keys")
require("./services/passport");

const app = express();

//connecting to mongodb


mongoose.connect(keys.mongoURI);

 
app.get("/", (req, res) => {
    res.send("Hello World !");
})

require("./routes/authRoutes")(app);
 
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("App started on port 5000 !")
})