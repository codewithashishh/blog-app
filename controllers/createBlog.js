const blogModel = require("../models/blogs")

async function writeNewBlog(req,res){
  const {blog, title} = req.body;
  
  await blogModel.create({
    blog, title , author: req.session.userId

})
res.redirect("/user")
}

async function createNewBlog(req,res){
  res.render("createblog")
}

module.exports = {createNewBlog,
  writeNewBlog
}