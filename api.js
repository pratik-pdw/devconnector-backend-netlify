require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
const serverless = require("serverless-http");
const router = express.Router();
// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
router.use("/users", require("./routes/api/users"));
router.use("/auth", require("./routes/api/auth"));
router.use("/profile", require("./routes/api/profile"));
router.use("/posts", require("./routes/api/posts"));

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
