const express = require('express');
const router = express.Router();
const authorController = require("../controller/authorController")
const blogscontroller = require("../controller/bloggercontroller")
const middleware = require("../middleware/middleware")


//Author routes
router.post("/authors",authorController.registerAuthor)

router.post("/login",authorController.loginAuthor)
//Blog routes

 router.post("/blogs",middleware.authentication,blogscontroller.createBlog)

router.get("/getblogs",middleware.authentication,blogscontroller.getBlogs)

// router.get("/specificblogs", middleware.authentication,middleware.authorisation, blogscontroller.getByFilter)

router.put("/blogs/:blogId", middleware.authentication,middleware.authorisation, blogscontroller.updateBlog)

// router.put("/updatingpublisher", middleware.authentication,middleware.authorisation, blogscontroller.updatingpublisherwithdate)

router.delete("/deleteblogs/:blogId", blogscontroller.deleteBlogsById)

router.delete("/delete", middleware.authentication,middleware.authorisation, blogscontroller.deleteBlogByQuerCondition)

module.exports = router