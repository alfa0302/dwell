const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getAllPostsByUser,
  getPost,
  addPost,
  updatePost,
  deletePost,
  addPostImages,
} = require("../controllers/postController");
const protect = require("../middlewares/protect");
const imageError = require("../middlewares/imageError");
const upload = require("../middlewares/upload");

router.get("/", protect, getAllPosts);
router.get("/user/:id", protect, getAllPostsByUser);
router.get("/:id", protect, getPost);
router.post("/", protect, addPost);
router.post("/:id", protect, upload.array("images", 10), addPostImages);
router.patch("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
