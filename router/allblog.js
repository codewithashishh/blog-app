const express = require("express");
const router = express.Router();
const {getAllBlogs} = require("../controllers/allblog")


router.get("/blog", getAllBlogs)

module.exports = router;
