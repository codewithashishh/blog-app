const express = require("express");
const router = express.Router();
const {getUserPanel} = require("../controllers/user")


router.get("/user", getUserPanel)

module.exports = router;