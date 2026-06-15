const User = require("../models/User");
const { validatePhoneNumber, isValidEmail } = require("../utils/helper");

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: false,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).select("username avatar");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const updateUser = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  const { username, email, phone, bio } = req.body;

  if (email && !isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  if (phone && !validatePhoneNumber(phone)) {
    return res.status(400).json({
      success: false,
      message: "Invalid UAE phone number",
    });
  }
  if (username !== undefined) user.username = username;
  if (email !== undefined) user.email = email;
  if (phone !== undefined) user.phone = phone;
  if (bio !== undefined) user.bio = bio;

  await user.save();

  return res.status(200).json({
    success: true,
    data: user,
  });
};

module.exports = { getUser, getUserById, updateUser };
