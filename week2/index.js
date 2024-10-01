const express = require("express");
const app=express();
function sum(n){
    let ans =0;
    for(let i=0;i<=n;i++){
        ans=ans+1;
    }
    return ans;
}
app.get("/",function (req,res){
    const n =req.query.n;
    const ans =sum(100);
    res.send("hii there "+ ans)
})
app.listen(3000)