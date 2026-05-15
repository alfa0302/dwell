const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      select: false, //to prevent returning password
    },
    avatar: {
      type: String,
      default: `${process.env.SERVER_URL}/uploads/default-profile-picture.webp`,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "buyer", "agent"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
