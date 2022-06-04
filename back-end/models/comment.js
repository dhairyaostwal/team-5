const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    post_id:{
        type:String,
        required:true,
    },
    user_id:{
        type:String,
        required:true,
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


module.exports=mongoose.model('comment',commentSchema)