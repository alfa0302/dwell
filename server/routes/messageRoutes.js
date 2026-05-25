const express = require("express");
const router = express.Router();

const { addMessage } = require("../controllers/messageController");
const protect = require("../middlewares/protect");

router.post("/", protect, addMessage);

module.exports = router;
