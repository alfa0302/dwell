const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 120,
    },
    description: {
      type: String,
      required: true,
      maxLength: 5000,
    },
    images: [
      {
        type: String,
        // required: true,
      },
    ],
    type: {
      type: String,
      enum: ["apartment", "villa", "studio", "office", "other"],
      required: true,
    },
    purpose: {
      type: String,
      enum: ["rent", "sale"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    location: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      coordinates: {
        lat: {
          type: Number,
          required: true,
        },
        lng: {
          type: Number,
          required: true,
        },
      },
    },
    details: {
      bedrooms: {
        type: Number,
        min: 0,
      },
      bathrooms: {
        type: Number,
        min: 0,
      },
      size: {
        type: Number,
        required: true,
      },
      furnished: {
        type: Boolean,
        default: false,
      },
      petsAllowed: {
        type: Boolean,
        default: false,
      },
      parkingSpaces: {
        type: Number,
        default: 0,
      },
    },
    utilities: {
      electricityIncluded: {
        type: Boolean,
        default: false,
      },

      waterIncluded: {
        type: Boolean,
        default: false,
      },

      internetIncluded: {
        type: Boolean,
        default: false,
      },

      gasIncluded: {
        type: Boolean,
        default: false,
      },
    },
    contact: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: String,
    },
    status: {
      type: String,
      enum: ["active", "sold", "rented", "inactive"],
      default: "active",
    },
    amenities: [
      {
        type: String,
        enum: [
          "pool",
          "gym",
          "parking",
          "security",
          "elevator",
          "balcony",
          "garden",
          "maid_room",
          "central_ac",
          "playground",
        ],
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Post", PostSchema);
