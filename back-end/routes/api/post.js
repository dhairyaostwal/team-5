const express = require('express')
const router = express.Router()
const Post = require('../../models/post')

const Comment = require('../../models/comment')

const auth = require('../../middleware/auth')


router.post('/add-post',auth,async(req,res)=>{

    const post = new Post({
        user_id: req.user.id,
        title: req.body.title,
        description: req.body.description
    })

    try{
        const newpost = await post.save()
        res.status(201).json(newpost)
    }catch(err){
        res.status(400).json({ message:err.message })
    }

})


router.get('/get-posts',async(req,res)=>{
    try{
        const posts = await Post.find().sort({
            date:-1
        })
        res.json(posts)
    }catch(err){
        res.status(500).json({ message:err.message })
    }
})

router.get('/get-3-posts',async(req,res)=>{
    try{
        const posts = await Post.find().sort({
            date:-1
        }).limit(3)
        res.json(posts)
    }catch(err){
        res.status(500).json({ message:err.message })
    }
})

router.get('/get-comments/:id',async(req,res)=>{
    try{
        const comments = await Comment.find({
            post_id: req.params.id
        })
        res.json(comments)
    }catch(err){
        res.status(500).json({ message:err.message })
    }
})

router.post('/add-comment',auth,async(req,res)=>{
    
        const comment = new Comment({
            user_id: req.user.id,
            post_id: req.body.post_id,
            comment: req.body.comment
        })
    
        try{
            const newcomment = await comment.save()
            res.status(201).json(newcomment)
        }catch(err){
            res.status(400).json({ message:err.message })
        }    
})


module.exports = router
