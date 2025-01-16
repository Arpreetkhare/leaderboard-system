const express = require("express");
const router = express.Router();
const User = require("../models/user");
const History = require("../models/history");


router.post('/', async(req,res) => {
    try{
        const {user_id} = req.body ; 
        const points = Math.floor(Math.random()*10)+1;

        const user = await User.findById(user_id);
        user.total_points += points;
        await user.save();

        const history = new History ({user_id , points_awarded : points});
        await history.save();

        res.status(201).json({user , points_awarded : points});

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router; 
