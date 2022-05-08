const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();
const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat", require("./routes/chatRoutes"));

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);
// const { chats } = require("./data/data");

// app.get("/", (_, res) => {
//   res.send("API is running...");
// });

// app.get("/api/chat", (_, res) => {
//   res.json(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const { id } = req.params;

//   res.json(chats.find(({ _id }) => _id === id));
// });

const PORT = process.env.PORT || 5002;
app.listen(PORT, console.log(`Server started at PORT ${PORT}`));
