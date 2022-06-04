const { response } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../../models/user')

const bcrypt = require('bcryptjs')

const config = require('config')
const jwt = require('jsonwebtoken')

router.post('/',(req,res)=>{
    const { name,email,password, mobileNo, linkedInURL, referralByCode } = req.body


    //Validation
    if(!name||!email||!password|| !mobileNo|| !linkedInURL)
        return res.status(400).json({ msg : 'Enter all required fields'})
    
    User.findOne({email})
    .then(user =>{
        if(user) return res.status(400).json({ msg: 'User Exists' })
        const referralCode = Math.random().toString(36).substring(2, 8);
        const isAuth = false;
        const newUser = new User({
            name,
            email,
            password,
            mobileNo, 
            linkedInURL,
            isAuth, 
            referralCode,
            referralByCode
        })

        

        // Create Salt and Hash
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err

                newUser.password = hash
                newUser.save()
                .then(user=>{

                    jwt.sign(
                        { id:user.id },
                        config.get('jwtSecret'),
                        { expiresIn:3600 },
                        (err,token) =>{
                            if (err) throw err

                            res.json({
                                token,  // token:token
                                user:{
                                    id:user.id,
                                    name:user.name,
                                    email:user.email,
                                    mobileNo: user.mobileNo,
                                    isAuth: user.isAuth,
                                    linkedInURL: user.linkedInURL,
                                    referralCode: user.referralCode,
                                    referralByCode: user.referralByCode,
                                    points: user.points
                                }
                            })
                        }
                    )
                })
            })
        })
    })
})


module.exports = router