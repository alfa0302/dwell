const express = require("express");
const router = express.Router();
const { getUser, getUserById } = require("../controllers/userController");
const protect = require("../middlewares/protect");

router.get("/", protect, getUser);
router.get("/:userId", protect, getUserById);

module.exports = router;
