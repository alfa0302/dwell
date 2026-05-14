const express = require("express");
const router = express.Router();
const {
  loginUser,
  signInUser,
  logoutUser,
  avatarUpload,
} = require("../controllers/authController");
const upload = require("../middlewares/upload");
const protect = require("../middlewares/protect");

router.post("/login", loginUser);
router.post("/signin", signInUser);
router.post("/logout", logoutUser);

router.post("/upload", protect, upload.single("image"), avatarUpload);

module.exports = router;
