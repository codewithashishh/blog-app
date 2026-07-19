const Blog = require("../models/blogs");

async function getAllBlogs(req, res) {

    const blogs = await Blog.find().populate("author");

    res.render("allblogs", {
        blogs,
    });

}

module.exports = {
    getAllBlogs,
};