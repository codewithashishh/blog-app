const express = require("express");
const router = express.Router();
const {createNewBlog,
  writeNewBlog,
  handleEditPage,
    handleEditBlog,
    handleDeleteBlog
} = require("../controllers/createBlog")


router.get("/blog/createBlog", createNewBlog)
router.post("/blog/createBlog", writeNewBlog)
router.get("/blog/edit/:id", handleEditPage);
router.post("/blog/edit/:id", handleEditBlog);
router.post("/blog/delete/:id", handleDeleteBlog);


module.exports = router;
