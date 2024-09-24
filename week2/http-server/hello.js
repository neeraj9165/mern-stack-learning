const express = require("express");
const  port =3001;
const app=express();
app.get('/',function(req,res){
    res.send ('hello world');
})
app.listen(port,()=>{
    console.log("this is running");
});