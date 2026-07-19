const express = require("express");
const router = express.Router();
const {checkAuthentication} = require("../middlewares/auth")
const {getAllBlogs} = require("../controllers/allblog")


router.get("/blog",checkAuthentication, getAllBlogs)

module.exports = router;
