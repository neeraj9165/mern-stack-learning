const {user}= require ("dbs");

function userMiddelware(req, res, next){
     
const username = req.headers.username;
const password = req.headers.password;
UserActivation.findOne({
    username:username,
    password: password
})
.then(function(value){
    if(value){
        next;
    }else{
        res.status(403).json({
            msg:"Admin dosent exist"
        })
    }
})

} 