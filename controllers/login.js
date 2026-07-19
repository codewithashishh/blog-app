const User = require("../models/users")
const bcrypt = require("bcrypt");

async function handlePostLogin(req,res){
     const {email, password} = req.body;

     const existingUser = await User.findOne({email});

     if(!existingUser){
      return res.redirect("/user/signup")
     }

     const isMatch = await bcrypt.compare(
      password,
      existingUser.password
     )

     if (!isMatch) {
    return res.status(401).send("Wrong Password");
}

req.session.userId = existingUser._id;

res.redirect("/");
}


async function handleGetLogin(req,res){
  res.render("login")
}

module.exports = {handlePostLogin,
      handleGetLogin
}