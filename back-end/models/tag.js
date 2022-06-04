const mongoose = require('mongoose')

const tagSchema = mongoose.Schema({
    tag_name:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('tag',tagSchema)