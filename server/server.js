require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

app.get("/", (req, res) => {
  console.log("hitpoint to server.js");
  res.status(200).json({ message: "Welcome to the API" });
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
