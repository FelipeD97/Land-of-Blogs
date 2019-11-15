const express = require("express"),
    router = express.Router();

const blogModel = require("../models/blogModel");

router.get("/", (req, res) => {
    res.send("Land of Blogs API").status(200);
  });

// Add blog
router.post("/post/add", async (req, res) => {
    const { title, user_id, content } = req.body;
    const response = await blogModel.addPost(title, user_id, content);
    
    if (response.command === "INSERT" && response.rowCount >= 1) {
        res.sendStatus(200);
    } else {
        res.send(`Could not post ${title}`).status(409);
    }
});

// Read all blogs
router.get("/all", async (req, res, next) => {
    const allBlogs = await blogModel.getBlogs();
    res.json(allBlogs).status(200);
});

// Read one blog 
router.get("/post/:id?", async (req,res) => {
    const blogId = req.params.id;
    const blog = await blogModel.getBlogId(blogId);
    res.json(blog).status(200);
});

// See specific user blogs
router.get("/:user_id?", async (req, res) => {
    const userId = req.params.user_id;
    const userBlogs = await blogModel.getById(userId);
    res.json(userBlogs).status(200);
});

// Update blog
router.put("/post/update/:id?", async (req, res) => {
    const blogId = req.params.id;
    const { content } = req.body;
    const response = await blogModel.updatePost(blogId, "content", content);
    
    if (response.command === "UPDATE" && response.rowCount >= 1) {
        res.sendStatus(200);
    } else {
        res.send(`Could not update ${blogId}`).status(409);
    }
});

// // Delete blog 
router.delete("/post/delete/:id?", async (req, res) => {
    const blogId = req.params.id;
    const response = await blogModel.removePost(blogId);
    
    if (response.command === "DELETE" && response.rowCount >= 1) {
        res.sendStatus(200);
    } else {
        res.send(`Could not delete ${blogId}`).status(409);
    }
});

module.exports = router;