const Chat = require("../models/Chat");
const Message = require("../models/Message");

const addMessage = async (req, res) => {
  try {
    const { chatId, text } = req.body;

    if (!chatId || !text?.trim()) {
      return res.status(400).json({
        message: "chatId and text are required",
      });
    }

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({
        message: "Chat not found",
      });
    }

    const isParticipant = chat.users.some(
      (id) => id.toString() === req.user._id.toString(),
    );

    if (!isParticipant) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    const message = await Message.create({
      text,
      userId: req.user._id,
      chatId,
    });

    await Chat.findByIdAndUpdate(chatId, {
      lastMessage: text,
      seenBy: [req.user._id],
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addMessage,
};
