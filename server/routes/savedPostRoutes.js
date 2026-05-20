const express = require("express");
const router = express.Router();
const {
  createSavedPost,
  getSavedPosts,
  deleteSavedPost,
} = require("../controllers/savedPostController");
const protect = require("../middlewares/protect");

router.get("/", protect, getSavedPosts);
router.post("/:postId", protect, createSavedPost);
router.delete("/:postId", protect, deleteSavedPost);

module.exports = router;
