const express = require("express");
const router = express.Router();
const {createNewBlog} = require("../controllers/createBlog")


router.get("/blog/createBlog", createNewBlog)
router.post("/blog/createBlog", writeNewBlog)
module.exports = router;
