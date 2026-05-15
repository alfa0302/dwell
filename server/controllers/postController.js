const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  try {
    // pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const posts = await Post.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 })
      .lean(); //used for read only data
    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllPostsByUser = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const userId = req.params.id;
    const posts = await Post.find({ userId })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 })
      .lean();
    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id).lean();
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const addPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const {
      title,
      description,
      type,
      purpose,
      price,
      location,
      details,
      utilities,
      contact,
      status,
      amenities,
    } = req.body;

    const post = await Post.create({
      userId,
      title,
      description,
      type,
      purpose,
      price,
      location,
      details,
      utilities,
      contact,
      status,
      amenities,
    });
    return res.status(201).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      req.body,
      {
        runValidators: true, //schema validations
        new: true, //returns new document
      },
    );
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findOneAndDelete({ _id: id, userId: req.user._id });
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post successfully deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllPosts,
  getAllPostsByUser,
  getPost,
  addPost,
  updatePost,
  deletePost,
};
