const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { body, validationResult } = require("express-validator");

router.post('/', [
    body('name', 'Name must be at least 3 characters long').isLength({ min: 3 }),
    body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    body('email', 'Enter a valid email address').isEmail()
], async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }



        user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;