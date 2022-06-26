const jwt = require("jsonwebtoken");
const authorModel = require('../models/authorModel')
var validator = require('email-validator')
var passwordValidator = require('password-validator')


//=========================================================== Creating author =============================================================//

// ### Author APIs /authors
// - Create an author - atleast 5 authors
// - Create a author document from request body.
//   `Endpoint: BASE_URL/authors`


const createAuthor = async function (req, res) {
    try {
        let authorData = req.body
        let {fname,lname,title,email,password} = authorData

        if(!fname){
            return res.status(400).send({status:false,msg:"firstname is mandatory"})
        }

        if(!/^([a-zA-Z]){2,20}$/.test(fname)){
            return res.status(400).send({status:false,msg:"firstname should not be a number"})
        }

        if(!lname){
            return res.status(400).send({status:false,msg:"lastname is mandatory"})
        }

        if(!/^([a-zA-Z]){2,10}$/.test(lname)){
            return res.status(400).send({status:false,msg:"lastname should not be a number"})
        }

        if(!title){
            return res.status(400).send({status:false,msg:"title is mandatory"})
        }
        if(!(title=="Mr"||title=="Mrs"||title=="Miss")){
            return res.status(400).send({status:false,msg:"title is mandatory"})
        }
        if(!email){
            return res.status(400).send({status:false,msg:"email is mandatory"})
        }
        if(!password){
            return res.status(400).send({status:false,msg:"password is mandatory"})
        }
        if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%^&*]{8,})$/)) {
            return res.status(400).send({ status: false, msg: "password is not strong,must contain alphanumeric" })
          }

          let isValidEmail = validator.validate(email)

          if(!isValidEmail){
            return res.status(400).send({status:false,msg:"valid email is mandatory"})
          }
          let isUniqueEmail = await authorModel.findOne({email:email})

          if(isUniqueEmail){
            return res.status(400).send({status:false,msg:"email already exist"})
          }
        let savedData = await authorModel.create(authorData);
        res.status(201).send({ status: true, data: savedData })
    }
    catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
}


// ### POST /login
// - Allow an author to login with their email and password. On a successful login attempt return a JWT token contatining the authorId
// - If the credentials are incorrect return a suitable error message with a valid HTTP status code



const loginAuthor = async function (req, res) {
    try {
        let userName = req.body.email;
        let password = req.body.password;
        if(!userName){
            return res.status(400).send({status:false,msg:"username is mandatory"})
        }
        if(!password){
            return res.status(400).send({status:false,msg:"password is mandatory"})
        }
        let user = await authorModel.findOne({ email: userName, password: password });
        if(!user){
            return res.status(400).send({status:false,msg:"either your email or password must be invalid"})
        }
        let token = jwt.sign({ userId: user._id.toString() }, "projectOne");
        res.setHeader("x-api-key", token);
       return res.send({ status: true, data: token });
    }
    catch (error) {
        res.status(400).send({ msg: error.message })
    }
}


module.exports.createAuthor = createAuthor
module.exports.loginAuthor = loginAuthor