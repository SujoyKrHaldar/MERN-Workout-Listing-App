require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const workout_route = require("./routes/workout");

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.log(err.message));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

app.use("/api/workout", workout_route);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
