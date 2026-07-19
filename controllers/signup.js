const User = require("../models/users")
const bcrypt = require("bcrypt");


async function handlePostSignup(req,res){
    const { name, email , password} = req.body;
    if(!name|| !email|| !password){
      return res.status(400).send("Invalid Input")
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(409).send("User already Exist")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

     await User.create({
        name,
        email,
        password:hashedPassword,
    });

    res.redirect("/user/login")
}


async function handleGetSignup(req,res){
      res.render("signup");
}

module.exports = {handlePostSignup,
      handleGetSignup
}