const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    user_id:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    date_start:{
        type:String,
        required:true
    },
    date_end:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('project',projectSchema)