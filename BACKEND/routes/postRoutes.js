const express = require("express");
const router = express.Router();

// Dummy Posts
let posts = [];

// Get All Posts
router.get("/", (req, res) => {
    res.json(posts);
});

// Create Post
router.post("/", (req, res) => {
    const post = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    posts.push(post);

    res.json({
        message: "Post Created Successfully",
        post
    });
});

// Delete Post
router.delete("/:id", (req, res) => {
    posts = posts.filter(post => post.id != req.params.id);

    res.json({
        message: "Post Deleted Successfully"
    });
});

module.exports = router;