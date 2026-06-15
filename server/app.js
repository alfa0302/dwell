const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
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
const initializeSocket = require("./socket/socket");

const app = express();
dbConnect();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
});
initializeSocket(io);

app.set("io", io);
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

server.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
});
