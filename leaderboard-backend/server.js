const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const socketIo = require('socket.io');

const { Server } = require("socket.io");

dotenv.config();

const userRoutes = require("./routers/userRoutes");
const historyRoutes = require("./routers/historyRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
      origin: 'http://localhost:3000',  // Replace with your frontend URL
      methods: ['GET', 'POST']
  }
});


app.use(cors({
  origin: 'http://localhost:3000',  // Replace with your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));



// Routes
app.use("/api/users", userRoutes);
app.use("/api/history", historyRoutes);

// Real-Time Updates
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("claim-points", () => {
    io.emit("update-leaderboard");
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
