const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://neeraj123:<db_password>@cluster0.6z06g.mongodb.net/')
 

const AdminSchema= new mongoose.Schema({
    username :String,
    password:String
});
const UserSchema= new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourse:[{
        type:mongoose.schema.types.objectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink :String,
    price:Number
});
const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
 const Course = mongoose.model('Course',CourseSchema);

 MediaSourceHandle.exports={
    Admin,
    User,
    Course,
 }