const express=require("express");
const app=express();

app.get("/",()=>{
    res.send("<div>Hello World !</div>");
})


const port=process.env.PORT || 5002;
app.listen(port,()=>{
    console.log("App started on port 5002 !")
})