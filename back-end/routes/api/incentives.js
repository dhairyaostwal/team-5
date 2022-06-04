const express = require('express')
const router = express.Router()
const User = require('../../models/user')

const bcrypt = require('bcryptjs')

const config = require('config')
const jwt = require('jsonwebtoken')

const auth = require('../../middleware/auth')


router.get('/leaderboard', (req, res) => {
    User.find().sort({
        points: -1
    }).limit(5).then(user => {
        res.json(user)
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    })

})


router.post('/add-points',auth, async(req, res) => {
    const additionalPoints = req.body.additionalPoints;
    try{
        const user = await User.findById(req.user.id)
        user.points = user.points + additionalPoints
        await user.save()
        res.json(user)
    }catch(err){
        res.status(500).json({ message:err.message })
    }

})



module.exports = router