const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET;

const { body, validationResult } = require("express-validator");
const fetchUser = require("../middlewares/fetchUser");

router.post('/signup', [
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
        
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(password,salt);

        user = await User.create({
            name,
            email,
            password:secPassword
        });
       


        const data = {
           user:{
            id:user._id
           }
        }
        const token = jwt.sign(data, JWT_SECRET)

        res.status(201).json(token);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.post('/login' , [
    body('password', 'Password cannot be blank').exists(),
    body('email', 'Enter a valid email address').isEmail()
], async (req, res) => {

         const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

    
        try {
            
            const {email, password} =req.body;

            let user = await User.findOne({email})

            if(!user){
                return res.status(400).json({error: "Email and password are incorrect"})
            }

            const comparePassword = await bcrypt.compare(password, user.password);
            if(!comparePassword){
                         return res.status(400).json({error: "Email and password are incorrect"})
            }



        const data = {
           user:{
            id:user._id
           }
        }
        const token = jwt.sign(data, JWT_SECRET)

        res.status(201).json(token);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


router.post('/getuser' , fetchUser , async (req,res) =>{
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;