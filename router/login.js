const express = require("express");
const router = express.Router();
const {handleGetLogin,
      handlePostLogin
} = require("../controllers/login")

router.get("/user/login", handleGetLogin);
router.post("/user/login", handlePostLogin);

module.exports = router