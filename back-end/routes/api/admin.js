const express = require('express')
const router = express.Router()
const User = require('../../models/user')

const auth = require('../../middleware/auth')


router.post('/admit-user/:id', async(req,res)=>{
    User.findByIdAndUpdate(
        req.params.id, {'isAuth':true}).then(result => {
            console.log("Updated");
          })
          .catch(err => {
            console.log(err);
          });
    
})
router.delete('/reject-user/:id',async(req,res)=>{
    User.findByIdAndDelete(
        req.params.id).then(result => {
            console.log("Deleted");
          })
          .catch(err => {
            console.log(err);
          });
    
})
router.get('/',async(req,res)=>{

    try{
        const users = await User.find({
            isAuth : false
          })
        res.json(users)
    }catch(err){
        res.status(500).json({ message:err.message })
    }
})

module.exports = router