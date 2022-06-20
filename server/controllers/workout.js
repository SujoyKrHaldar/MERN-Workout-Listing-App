const workoutSchema = require("../models/workoutSchema");

const workout = {
  getALlData: (req, res) => res.status(200).json({ message: "Get all data" }),
  getOneData: (req, res) => res.status(200).json({ message: "Get one data" }),

  postData: async (req, res) => {
    try {
      const newData = await workoutSchema.create(req.body);
      res.status(201).json({ message: "Entry created.", newData });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateData: (req, res) => res.status(200).json({ message: "Update a data" }),
  deleteData: (req, res) => res.status(200).json({ message: "Delete a data" }),
};

module.exports = workout;
