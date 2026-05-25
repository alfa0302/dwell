const express = require("express");
const router = express.Router();
const {
  getChats,
  getChatById,
  addChat,
  readChat,
} = require("../controllers/chatController");
const protect = require("../middlewares/protect");

router.get("/", protect, getChats);
router.get("/:id", protect, getChatById);
router.post("/", protect, addChat);
router.post("/read/:id", protect, readChat);

module.exports = router;
