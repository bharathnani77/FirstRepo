const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")

const authorController = require("../controller/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authors",authorController.createAuthor)

// router.post("/createUser", UserController.createUser  )
module.exports = router