const Blog = require("../models/blogs")

async function writeNewBlog(req,res){
  const {blog, title} = req.body;
  
  await Blog.create({
    blog, title , author: req.session.userId

})
res.redirect("/user")
}

async function createNewBlog(req,res){
  res.render("createblog")
}

async function handleEditPage(req, res) {

    const id = req.params.id;

    const blog = await Blog.findById(id);

    if (!blog) {
        return res.status(404).send("Blog not found");
    }

    if (blog.author.toString() !== req.session.userId) {
        return res.status(403).send("Unauthorized");
    }

    res.render("editBlog", {
        blog,
    });

}
async function handleEditBlog(req, res) {

    const id = req.params.id;

    const { title, blog } = req.body;

    const existingBlog = await Blog.findById(id);

    if (!existingBlog) {
        return res.status(404).send("Blog not found");
    }

    if (existingBlog.author.toString() !== req.session.userId) {
        return res.status(403).send("Unauthorized");
    }

    await Blog.findByIdAndUpdate(id, {
        title,
        blog,
    });

    res.redirect("/user");

}
async function handleDeleteBlog(req, res) {

    const id = req.params.id;

    const blog = await Blog.findById(id);

    if (!blog) {
        return res.status(404).send("Blog not found");
    }

    if (blog.author.toString() !== req.session.userId) {
        return res.status(403).send("Unauthorized");
    }

    await Blog.findByIdAndDelete(id);

    res.redirect("/user");

}

module.exports = {createNewBlog,
  writeNewBlog,
  handleEditPage,
    handleEditBlog,
    handleDeleteBlog
}