const express = require("express");
const router = express.Router();
const {
  getUser,
  getUserById,
  updateUser,
} = require("../controllers/userController");
const protect = require("../middlewares/protect");

router.get("/", protect, getUser);
router.get("/:userId", protect, getUserById);
router.patch("/", protect, updateUser);

module.exports = router;
