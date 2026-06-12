const express = require("express");
const router = express.Router();

// Dummy Comments
let comments = [];

// Get All Comments
router.get("/", (req, res) => {
    res.json(comments);
});

// Add Comment
router.post("/", (req, res) => {
    const comment = {
        id: Date.now(),
        username: req.body.username,
        comment: req.body.comment
    };

    comments.push(comment);

    res.json({
        message: "Comment Added Successfully",
        comment
    });
});

module.exports = router;