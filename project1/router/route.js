const express = require('express');
const router = express.Router();
const authorController = require("../controller/authorController")
const blogscontroller = require("../controller/bloggercontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authors",authorController.createAuthor)

router.post("/blogs", blogscontroller.createBlogs)

router.get("/blogs", blogscontroller.getallblogs)

router.get("/specificblogs", blogscontroller.getByFilter)

router.put("/blogs/:blogId", blogscontroller.updateBlog)

router.put("/updatingpublisher", blogscontroller.updatingpublisherwithdate)

router.get("/blogs/:blogId", blogscontroller.deleteBlogsById)

router.get("//blogs?queryParams", blogscontroller.deleteBlogByQuerConditoin)
module.exports = router