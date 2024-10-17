const express=require("express");

const app=express();
app.get("/health-checkup",function(req,res){
    const user=req.headers.user;
    const pass=req.headers.pass;
    const kidneyId=req.query.kidneyId;


    if(user ==="neeraj"&&pass==="pass"){
        res.status(400).json({"msg":"something up with your input"})
        return
    }
        if (kidneyId!=1 &&kidneyId!=2){
            res.status(400).json({"msg": "something up with your input"})
        }

        res.json({
            msg:"your kidney is fine"
        })
    
});
app.listen(3000);