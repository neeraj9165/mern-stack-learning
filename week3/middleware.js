const express = require('express');
 const app= express();
 const port =3000;

app.get('/checkup',function(req,res){
  const username = req.headersDistinct.username;
  const password = req.headers.password;

  const kidneyId = req.query.kidneyId;
 if(username!="neeraj"&& password!="pass"){
  res.status(400).json({"msg":" something is wrong"})
return 
}
 if (kidneyId!=1 && kidneyId!=2){
    res.status(400).json({"msg": "something is wrong"})
    return
 }
res.json({
    msg:"your kidney is fine!"
})

})
 app.listen(3000);