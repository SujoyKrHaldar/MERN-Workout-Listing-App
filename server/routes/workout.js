const express = require("express");
const workout = require("../controllers/workout");

const route = express.Router();

route.get("/", workout.getAllData);
route.get("/:id", workout.getOneData);
route.post("/", workout.postData);
route.patch("/:id", workout.updateData);
route.delete("/:id", workout.deleteData);

module.exports = route;
