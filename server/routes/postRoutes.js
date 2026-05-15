const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getAllPostsByUser,
  getPost,
  addPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const protect = require("../middlewares/protect");

router.get("/", protect, getAllPosts);
router.get("/user/:id", protect, getAllPostsByUser);
router.get("/:id", protect, getPost);
router.post("/", protect, addPost);
router.patch("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
