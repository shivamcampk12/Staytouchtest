const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");

exports.signin = (req, res) => {

   var _username= req.body._username;

   let usernameIsValid = (username) => username === 'admin';

      if (!usernameIsValid(_username)) {
        return res.status(401).send({
          accessToken: null,
          message: "User does not exist"
        });
      }

      var _password= req.body._password

      let passwordIsValid = (password) => password === 'admin';
   
      //Checking password validity and throwing err on unsuccessful iteration
         if (!passwordIsValid(_password)) {
           return res.status(401).send({
             accessToken: null,
             message: "Username password does not match"
           });
         }

         //Generating JWT
      var token = jwt.sign({ id: 'admin' }, config.JWTsecret, {
        expiresIn: 86400 // 24 hours
      });

      //Sending success response
      res.status(200).send({
        _username: _username,
        _accessToken: token
      });
};
