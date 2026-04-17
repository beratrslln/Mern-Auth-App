//authRoutes


const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user")

router.post("/api/register" , userCtrl.registerPost)
router.post("/api/login" ,userCtrl.loginPost )
module.exports = router;