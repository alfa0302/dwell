const Chat = require("../models/Chat");
const Message = require("../models/Message");

const getChats = async (req, res) => {
  try {
    const chats = await Chat.find({
      users: req.user._id,
    })
      .populate("users")
      .sort({ updatedAt: -1 });
    res.status(200).json({
      success: true,
      data: chats,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const getChatById = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id).populate("users");
    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found",
      });
    }
    const isParticipant = chat.users.some(
      (user) => user._id.toString() === req.user._id.toString(),
    );
    if (!isParticipant) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to access this chat",
      });
    }
    const messages = await Message.find({
      chatId: chat._id,
    })
      .populate("userId", "name email")
      .sort({ createdAt: 1 });
    return res.status(200).json({
      success: true,
      data: chat,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const addChat = async (req, res) => {
  try {
    const { receiverId } = req.body;

    if (!receiverId) {
      return res.status(400).json({
        message: "receiverId is required",
      });
    }

    if (receiverId === req.user._id.toString()) {
      return res.status(400).json({
        message: "Cannot create chat with yourself",
      });
    }

    let chat = await Chat.findOne({
      users: {
        $all: [req.user._id, receiverId],
      },
      $expr: {
        $eq: [{ $size: "$users" }, 2],
      },
    }).populate("users", "-password");

    if (chat) {
      return res.status(200).json(chat);
    }

    chat = await Chat.create({
      users: [req.user._id, receiverId],
      seenBy: [req.user._id],
    });

    chat = await Chat.findById(chat._id).populate("users");

    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const readChat = async (req, res) => {
  try {
    const chatId = req.params.id;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({
        message: "Chat not found",
      });
    }

    const isParticipant = chat.users.some(
      (userId) => userId.toString() === req.user._id.toString(),
    );

    if (!isParticipant) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    await Chat.findByIdAndUpdate(chatId, {
      $addToSet: {
        seenBy: req.user._id,
      },
    });

    const updatedChat = await Chat.findById(chatId);

    res.status(200).json(updatedChat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getChats,
  getChatById,
  addChat,
  readChat,
};
