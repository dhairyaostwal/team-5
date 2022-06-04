const express = require('express')
const router = express.Router()

const auth = require('../../middleware/auth')
const Tag = require('../../models/tag')

router.post('/add-tags',async(req,res)=>{

    const tag = new Tag({
        tag_name:req.body.tag_name
    })
    try{
        const newTag = await tag.save()
        res.status(201).json(newTag)
    }catch(err){
        res.status(400).json({ message:err.message })
    }

})

router.get('/get-tags',async(req,res)=>{
    try{
        const tags = await Tag.find()
        res.json(tags)
    }catch(err){
        res.status(500).json({ message:err.message })
    }
})

module.exports = router