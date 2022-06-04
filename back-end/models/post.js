const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user_id:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
        default:Date.now
    },
    description:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('post',postSchema)