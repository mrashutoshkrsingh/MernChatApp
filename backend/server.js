const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const { chats } = require("./data/data");

app.get("/", (_, res) => {
  res.send("API is running...");
});

app.get("/api/chat", (_, res) => {
  res.json(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;

  res.json(chats.find(({ _id }) => _id === id));
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, console.log(`Server started at PORT ${PORT}`));
