const express = require("express");
const router = express.Router();
const User = require("../models/user");

/**
 * GET /api/users
 * This endpoint retrieves all users from the database.
 * 
 * @returns {Array} 200 - An array of all user objects.
 * @returns {500} - If an error occurs, returns an internal server error message.
 */
router.get('/', async (req, res) => {
    try {
        
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

/**
 * POST /api/users
 * This endpoint creates a new user with a given name.
 * 
 * @param {Object} req.body - The request body should contain the name of the user to be created.
 * @param {string} req.body.name - The name of the user to be created. */
router.post("/", async (req, res) => {
    try {
        const { name } = req.body;

        // Create a new user instance
        const user = new User({ name });
        
        await user.save();
        
        res.status(201).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * GET /api/users/leaderboard
 * This endpoint retrieves all users sorted by total points in descending order, representing the leaderboard.
 * 
 */
router.get('/leaderboard', async (req, res) => {
    try {
        // Retrieve all users, sorted by total points in descending order
        const leaderboard = await User.find().sort({ total_points: -1 });
        res.json(leaderboard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
