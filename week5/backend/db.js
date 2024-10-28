const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://neeraj123:4CkYAh62zNtzV9e9@cluster0.6z06g.mongodb.net/todos ")

const todoSchema= mongoose.Schema({
    title :String,
    description:String,  
    completed : Boolean
})
const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo 
}