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
    console.log(req.body);
    console.log(req.files);
    const { title, description, type, purpose, price, status } = req.body;

    // Parse nested JSON fields safely
    const location = req.body.location ? JSON.parse(req.body.location) : {};

    const details = req.body.details ? JSON.parse(req.body.details) : {};

    const utilities = req.body.utilities ? JSON.parse(req.body.utilities) : {};

    const contact = req.body.contact ? JSON.parse(req.body.contact) : {};

    const amenities = req.body.amenities ? JSON.parse(req.body.amenities) : [];

    // Images from multer
    const imageUrls =
      req.files?.map(
        (file) =>
          `${req.protocol}://${req.get("host")}/uploads/${file.filename}`,
      ) || [];
    console.log(imageUrls);

    // Validate minimum images
    if (imageUrls.length < 2) {
      console.log("image error");
      return res.status(400).json({
        success: false,
        message: "At least 2 images are required",
      });
    }

    // Create valid post object
    const postData = {
      userId,

      title,
      description,
      type,
      purpose,
      status,

      price: Number(price),

      location: {
        address: location.address,
        city: location.city,

        // required in schema
        coordinates: {
          lat: Number(location.coordinates?.lat || 0),
          lng: Number(location.coordinates?.lng || 0),
        },
      },

      details: {
        bedrooms: Number(details.bedrooms || 0),
        bathrooms: Number(details.bathrooms || 0),
        size: Number(details.size || 0),
        furnished: details.furnished || false,
        petsAllowed: details.petsAllowed || false,
        parkingSpaces: Number(details.parkingSpaces || 0),
      },

      utilities: {
        electricityIncluded: utilities.electricityIncluded || false,

        waterIncluded: utilities.waterIncluded || false,

        internetIncluded: utilities.internetIncluded || false,

        gasIncluded: utilities.gasIncluded || false,
      },

      contact: {
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
      },

      amenities,
      images: imageUrls,
    };

    console.log(postData);

    const post = await Post.create(postData);

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updatePost = async (req, res) => {
  const allowedUpdates = [
    "title",
    "description",
    "type",
    "purpose",
    "price",
    "location",
    "details",
    "utilities",
    "contact",
    "status",
    "amenities",
  ];
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    const isOwner = post.userId.toString() === req.user._id.toString();
    const isAdmin = req.user.role === "admin";
    if (!isAdmin && !isValidUser) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }
    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        post[field] = req.body[field];
      }
    });
    await post.save();
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
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    const isOwner = post.userId.toString() === req.user._id.toString();
    const isAdmin = req.user.role === "admin";
    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
      await post.deleteOne();
      return res.status(200).json({
        success: true,
        message: "Post successfully deleted",
      });
    }
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
