const workout = {
  getALlData: (req, res) => res.status(200).json({ message: "Get all data" }),
  getOneData: (req, res) => res.status(200).json({ message: "Get one data" }),
  postData: (req, res) => res.status(200).json({ message: "Post a data" }),
  updateData: (req, res) => res.status(200).json({ message: "Update a data" }),
  deleteData: (req, res) => res.status(200).json({ message: "Delete a data" }),
};

module.exports = workout;
