const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/db");
const path = require("path");
const authRouter = require("./routes/authRoutes");
const postsRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");
const savedPostRouter = require("./routes/savedPostRoutes");
const chatRouter = require("./routes/chatRoutes");
const messageRouter = require("./routes/messageRoutes");

const app = express();
console.log(process.env.MONGO_URI_DEV);
dbConnect();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/user", userRouter);
app.use("/api/saved-post", savedPostRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
});
