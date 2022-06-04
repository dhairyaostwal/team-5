const mongoose = require('mongoose')

const internshipSchema = mongoose.Schema({
    user_id:{
        type:String,
        required:true,
    },
    company_name:{
        type:String,
        required:true
    },
    job_title:{
        type:String,
        required:true
    },
    description:{
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
    }
})


module.exports=mongoose.model('internship',internshipSchema)