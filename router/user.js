const express = require("express");
const router = express.Router();
const {checkAuthentication} = require("../middlewares/auth")
const {getUserPanel} = require("../controllers/user")


router.get("/user",checkAuthentication, getUserPanel)

module.exports = router;