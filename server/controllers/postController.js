const Post = require("../models/Post");
const Save = require("../models/SavedPosts");

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
      address,
      city,
      status,
      bedrooms,
      bathrooms,
      size,
      furnished,
      petsAllowed,
      parkingSpaces,
      electricityIncluded,
      waterIncluded,
      internetIncluded,
      gasIncluded,
      name,
      phone,
      email,
      amenities,
    } = req.body;
    if (
      !title ||
      !description ||
      !type ||
      !purpose ||
      !price ||
      !status ||
      !address ||
      !city ||
      !phone ||
      !name ||
      !email
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const postData = {
      userId,
      title,
      description,
      type,
      purpose,
      status,
      price: Number(price),
      location: {
        address: address,
        city: city,
        // coordinates: {
        //   lat: Number(coordinates?.lat || 0),
        //   lng: Number(coordinates?.lng || 0),
        // },
      },
      details: {
        bedrooms: Number(bedrooms || 0),
        bathrooms: Number(bathrooms || 0),
        size: Number(size || 0),
        furnished: furnished || false,
        petsAllowed: petsAllowed || false,
        parkingSpaces: Number(parkingSpaces || 0),
      },
      utilities: {
        electricityIncluded: electricityIncluded || false,
        waterIncluded: waterIncluded || false,
        internetIncluded: internetIncluded || false,
        gasIncluded: gasIncluded || false,
      },
      contact: {
        name: name,
        phone: phone,
        email: email,
      },
      amenities,
      // images: imageUrls,
    };
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
const addPostImages = async (req, res) => {
  const { id } = req.params;
  const { removedImages } = req.body;
  // to handle removedImages array from request
  const removed = Array.isArray(removedImages)
    ? removedImages
    : removedImages
      ? JSON.parse(removedImages)
      : [];
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    const imageUrls =
      req.files?.map(
        (file) =>
          `${req.protocol}://${req.get("host")}/uploads/${file.filename}`,
      ) || [];

    const updatedImages = post.images
      .filter((img) => !removed.includes(img))
      .concat(imageUrls);
    if (updatedImages.length < 2) {
      return res.status(400).json({
        success: false,
        message: "At least 2 images are required",
      });
    }
    post.images = updatedImages;
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
const updatePost = async (req, res) => {
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
    if (!isAdmin && !isOwner) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const {
      title,
      description,
      type,
      purpose,
      price,
      address,
      city,
      status,
      bedrooms,
      bathrooms,
      size,
      furnished,
      petsAllowed,
      parkingSpaces,
      electricityIncluded,
      waterIncluded,
      internetIncluded,
      gasIncluded,
      name,
      phone,
      email,
      amenities,
    } = req.body;

    if (title !== undefined) post.title = title;
    if (description !== undefined) post.description = description;
    if (type !== undefined) post.type = type;
    if (purpose !== undefined) post.purpose = purpose;
    if (status !== undefined) post.status = status;
    if (price !== undefined) post.price = Number(price);
    if (amenities !== undefined) post.amenities = amenities;
    if (address !== undefined) post.location.address = address;
    if (city !== undefined) post.location.city = city;
    if (bedrooms !== undefined) post.details.bedrooms = Number(bedrooms);
    if (bathrooms !== undefined) post.details.bathrooms = Number(bathrooms);
    if (size !== undefined) post.details.size = Number(size);
    if (parkingSpaces !== undefined)
      post.details.parkingSpaces = Number(parkingSpaces);
    if (furnished !== undefined)
      post.details.furnished = furnished === "true" || furnished === true;
    if (petsAllowed !== undefined)
      post.details.petsAllowed = petsAllowed === "true" || petsAllowed === true;
    if (electricityIncluded !== undefined)
      post.utilities.electricityIncluded =
        electricityIncluded === "true" || electricityIncluded === true;
    if (waterIncluded !== undefined)
      post.utilities.waterIncluded =
        waterIncluded === "true" || waterIncluded === true;
    if (internetIncluded !== undefined)
      post.utilities.internetIncluded =
        internetIncluded === "true" || internetIncluded === true;
    if (gasIncluded !== undefined)
      post.utilities.gasIncluded =
        gasIncluded === "true" || gasIncluded === true;
    if (name !== undefined) post.contact.name = name;
    if (phone !== undefined) post.contact.phone = phone;
    if (email !== undefined) post.contact.email = email;

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
    }
    await post.deleteOne();
    await Save.deleteMany({ postId: post._id });
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
const getAllPosts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      type,
      purpose,
      status,
      minPrice,
      maxPrice,
      minBedrooms,
      minBathrooms,
      minSize,
      minParking,
      furnished,
      petsAllowed,
      electricityIncluded,
      waterIncluded,
      internetIncluded,
      gasIncluded,
      amenities,
    } = req.query;
    let filter = {};
    // text search
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { "location.address": { $regex: search, $options: "i" } },
        { "location.city": { $regex: search, $options: "i" } },
        { "contact.name": { $regex: search, $options: "i" } },
        { "contact.email": { $regex: search, $options: "i" } },
      ];
    }
    // exact match
    if (type) filter.type = type;
    if (purpose) filter.purpose = purpose;
    if (status) filter.status = status;
    // boolean filters
    const boolFilters = {
      furnished: "details.furnished",
      petsAllowed: "details.petsAllowed",
      electricityIncluded: "utilities.electricityIncluded",
      waterIncluded: "utilities.waterIncluded",
      internetIncluded: "utilities.internetIncluded",
      gasIncluded: "utilities.gasIncluded",
    };
    Object.entries(boolFilters).forEach(([param, path]) => {
      if (req.query[param] !== undefined) {
        filter[path] = req.query[param] === "true";
      }
    });
    // price
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    // range
    if (minBedrooms) filter["details.bedrooms"] = { $gte: Number(minBedrooms) };
    if (minBathrooms)
      filter["details.bathrooms"] = { $gte: Number(minBathrooms) };
    if (minSize) filter["details.size"] = { $gte: Number(minSize) };
    if (minParking)
      filter["details.parkingSpaces"] = { $gte: Number(minParking) };
    // amenities
    if (amenities) {
      filter.amenities = { $in: amenities.split(",") };
    }
    const posts = await Post.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 })
      .lean();
    const total = await Post.countDocuments(filter);
    return res.status(200).json({
      success: true,
      data: posts,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
      },
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
  addPostImages,
  updatePost,
  deletePost,
};
