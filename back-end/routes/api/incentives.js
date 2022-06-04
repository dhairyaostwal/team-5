const express = require('express')
const router = express.Router()
const User = require('../../models/user')

const bcrypt = require('bcryptjs')

const config = require('config')
const jwt = require('jsonwebtoken')

const auth = require('../../middleware/auth')


router.get('/leaderboard', (req, res) => {
    const limit = 5;
    const leaderBoardData = User.find({}).sort({
        points: -1
    });
    console.log(leaderBoardData);
})



module.exports = router