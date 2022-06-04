const express = require('express')
const router = express.Router()
const User = require('../../models/user')

const auth = require('../../middleware/auth')


router.post('/admit-user/:id', async(req,res)=>{
    try{
        user= await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json('Cannot find User')
        }
    }catch(err){
        return res.status(500).json({ message:err.message })
    }
    
    referralCodes=user.referralByCode
    console.log(referralCodes)
    if(referralCodes!="")
    {
        const referralUser=await User.findOne({
             referralCode:referralCodes
         })
         referralUser.points=referralUser.points+100
            await referralUser.save()
            console.log("Added points")
    }
    User.findByIdAndUpdate(
        req.params.id, {'isAuth':true}).then(result => {
            console.log("Updated");
          })
          .catch(err => {
            console.log(err);
          });
    
})
router.post('/add-points-to-user-with-the-referalcode', async(req,res)=>{
    const {referalCode,points} = req.body
    console.log(referalCode,points)
    User.findOne({referalCode:referalCode}).then(result => {
        if(result){
            User.findByIdAndUpdate(
                result._id, {'points':result.points+points}).then(result => {
                    console.log("Updated");
                  })
                  .catch(err => {
                    console.log(err);
                  });
        }
    })
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