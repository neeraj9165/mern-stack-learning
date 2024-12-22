const mongoose = require("mongoose")
 mongoose.connect("")

 const userSchema = new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    password:String
 })


const User = new mongoose.model("User",userSchema)

const AccountSchema = new mongoose.Schema({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    balance :{
        type:Number,
        required: true
    },
})

const Account = mongoose.model("Accounts",AccountSchema)

module.exports={
    User,
    Account
}