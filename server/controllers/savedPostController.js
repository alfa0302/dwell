const SavedPost = require("../models/SavedPosts");
const Post = require("../models/Post");

const createSavedPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    const isSaveExists = await SavedPost.findOne({
      userId,
      postId,
    });
    if (isSaveExists) {
      return res.status(400).json({
        success: false,
        message: "Post already saved",
      });
    }
    const savedPost = await SavedPost.create({
      userId,
      postId,
    });
    return res.status(201).json({
      success: true,
      data: savedPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getSavedPosts = async (req, res) => {
  const userId = req.user._id;
  try {
    const savedPosts = await SavedPost.find({ userId }).populate("postId");
    return res.status(200).json({
      success: true,
      data: savedPosts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteSavedPost = async (req, res) => {
  try {
    const deleted = await SavedPost.findOneAndDelete({
      _id: req.params.postId,
      userId: req.user._id,
    });
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Saved post not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post successfully removed from saved list",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createSavedPost, getSavedPosts, deleteSavedPost };
