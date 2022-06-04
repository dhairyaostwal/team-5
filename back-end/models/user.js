const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    stud_id:{
        type:String,
        required:true
    },
    cgpa:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    }
})


module.exports=mongoose.model('user',userSchema)