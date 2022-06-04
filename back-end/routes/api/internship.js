const express = require('express')
const router = express.Router()
const Internship = require('../../models/internship')

const auth = require('../../middleware/auth')


router.post('/add-internship',auth,async(req,res)=>{

    const internship = new Internship({
        user_id:req.user.id,
        company_name:req.body.company_name,
        job_title:req.body.job_title,
        date_start:req.body.date_start,
        date_end:req.body.date_end,
        description:req.body.description,
        link:req.body.link
    })

    try{
        const newInternship = await internship.save()
        res.status(201).json(newInternship)
    }catch(err){
        res.status(400).json({ message:err.message })
    }

})

router.delete('/delete-internship/:id',auth,getInternship,async(req,res)=>{
    try{
        await res.internship.remove()
        res.json({ message: 'Deleted User' })
    }catch(err){
        res.status(500).json( {message:err.message} )
    }
})

router.get('/get-internships/:id',async(req,res)=>{

    try{
        const internships = await Internship.find({
            user_id : req.params.id
          })
        res.json(internships)
    }catch(err){
        res.status(500).json({ message:err.message })
    }
})


async function getInternship(req,res,next){

    let internship

    try{
        internship = await Internship.findById(req.params.id)
        if(internship == null){
            return res.status(404).json('Cannot find User')
        }
    }catch(err){
        return res.status(500).json({ message:err.message })
    }

    res.internship = internship
    next()
    
}

module.exports = router



