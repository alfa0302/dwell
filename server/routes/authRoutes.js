const express = require("express");
const router = express.Router();
const { loginUser, signInUser } = require("../controllers/authController");
const upload = require("../utils/upload");

router.post("/login", loginUser);
router.post("/signin", signInUser);

router.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
  });
});

module.exports = router;
