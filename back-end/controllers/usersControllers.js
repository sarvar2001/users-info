const Users = require("../models/UsersModels");

// method get
// descr: get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      message: "Success",
      users: users.reverse(),
    });
  } catch (error) {
    console.log(error);
  }
};

// method: post
// descr: add users

const addUser = async (req, res) => {
  try {
    const { title, telnumber, email, password, date } = req.body;

    const newUser = await Users.create({
      title,
      telnumber,
      date,
      email,
      password,
    });

    res.status(201).json({
      message: "success",
      newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

// method: delete
// delete users
const deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
};
