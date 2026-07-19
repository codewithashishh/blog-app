const express = require("express");
const router = express.Router();
const {handleGetLogout} = require("../controllers/logout")

router.get("/user/logout", handleGetLogout);

module.exports = router