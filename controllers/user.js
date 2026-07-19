const Blog = require("../models/blogs");

async function getUserPanel(req, res) {
    const blogs = await Blog.find({
        author: req.session.userId,
    });

    res.render("userblog", { blogs });
}

module.exports= {getUserPanel};