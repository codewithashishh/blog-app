const express = require("express");
const router = express.Router();
const {handleGetSignup,
      handlePostSignup
} = require("../controllers/signup")

router.get("/user/signup", handleGetSignup);
router.post("/user/signup", handlePostSignup);

module.exports = router