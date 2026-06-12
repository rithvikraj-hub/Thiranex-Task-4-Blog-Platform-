const express = require("express");
const router = express.Router();

// Register User
router.post("/register", (req, res) => {
    const { username, email } = req.body;

    res.json({
        message: "User Registered Successfully",
        user: { username, email }
    });
});

// Login User
router.post("/login", (req, res) => {
    const { email } = req.body;

    res.json({
        message: "Login Successful",
        email
    });
});

module.exports = router;
