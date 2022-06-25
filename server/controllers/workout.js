const WorkoutSchema = require("../models/workoutSchema");
const mongoose = require("mongoose");

const workout = {
  getAllData: async (req, res) => {
    const data = await WorkoutSchema.find({}).sort({ createdAt: -1 });
    // if (data.length === 0) {
    //   return res.status(404).json({ message: "No data." });
    // }
    res.status(200).json(data);
  },

  getOneData: async (req, res) => {
    const { id } = req.params;

    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      return res
        .status(404)
        .json({ message: "ID incorrect - No such data found." });
    }

    const data = await WorkoutSchema.findById(id);
    if (!data) {
      return res.status(404).json({ message: "data not found." });
    }
    res.status(200).json(data);
  },

  postData: async (req, res) => {
    try {
      const newData = await WorkoutSchema.create(req.body);
      res.status(201).json({ message: "Entry created.", newData });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateData: async (req, res) => {
    const { id } = req.params;

    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      return res
        .status(404)
        .json({ message: "ID incorrect - No such data found." });
    }

    const updatedData = await WorkoutSchema.findByIdAndUpdate(id, {
      ...req.body,
    });

    if (!updatedData) {
      return res.status(404).json({ message: "Some issue occured." });
    }

    res.status(200).json({ message: "Updated." });
  },

  deleteData: async (req, res) => {
    const { id } = req.params;

    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      return res
        .status(404)
        .json({ message: "ID incorrect - No such data found." });
    }
    const data = await WorkoutSchema.findByIdAndDelete(id);

    if (!data) {
      return res.status(404).json({ message: "Data not found." });
    }

    res.status(200).json({ message: "Deleted." });
  },
};

module.exports = workout;
