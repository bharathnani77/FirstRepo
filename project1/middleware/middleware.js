const jwt = require("jsonwebtoken");

// ### Authentication
// - Add an authorisation implementation for the JWT token that validates the token before every protected endpoint is called. If the validation fails, return a suitable error message with a corresponding HTTP status code
// - Protected routes are create a blog, edit a blog, get the list of blogs, delete a blog(s)
// - Set the token, once validated, in the request - `x-api-key`
// - Use a middleware for authentication purpose.


const authentication = async function (req, res, next) {
    let token = req.headers["x-api-key"];
    if (!token) return res.status(404).send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "projectOne");
    if (!decodedToken) return res.status(400).send({ status: false, msg: "token is invalid" });
    next()
}

// ### Authorisation
// - Make sure that only the owner of the blogs is able to edit or delete the blog.
// - In case of unauthorized access return an appropirate error message.

const authorisation = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "projectOne");
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' });
    next()
}

module.exports.authentication = authentication
module.exports.authorisation = authorisation