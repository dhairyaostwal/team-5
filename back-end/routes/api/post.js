const express = require('express')
const router = express.Router()
const Post = require('../../models/post')

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


// router.delete('/delete-post/:id',auth,getpost,async(req,res)=>{
//     try{
//         await res.post.remove()
//         res.json({ message: 'Deleted User' })
//     }catch(err){
//         res.status(500).json( {message:err.message} )
//     }
// })

// router.get('/get-posts/:id',async(req,res)=>{

//     try{
//         const posts = await post.find({
//             user_id : req.params.id
//           })
//         res.json(posts)
//     }catch(err){
//         res.status(500).json({ message:err.message })
//     }
// })

// async function getpost(req,res,next){
//     let post
//     try{
//         post = await post.findById(req.params.id)
//         if(post == null){
//             return res.status(404).json('Cannot find User')
//         }
//     }catch(err){
//         return res.status(500).json({ message:err.message })
//     }
    
//     res.post = post
//     next()
// }

module.exports = router
