const mongoose = require("mongoose");
const userModel = require("../model/userModel");

const isValid = (value) => {
  if (typeof value === "undefined" || value === null) return false;

  if (typeof value === "string" && value.trim().length === 0) {
    return false;
  }
  return true;
};

const addUser = async (req, res) => {
  try {
    let requestBody = req.body;

    const { name, rollno } = requestBody;

    if (!isValid(name)) {
      res.status(400).send({ Status: false, message: " Name is required" });
      return;
    }

    if (!isValid(rollno)) {
      res.status(400).send({ Status: false, message: "Rollno is required" });
      return;
    }

    const userData = await userModel.create(requestBody);
    return res
      .status(200)
      .send({ status: true, message: "Add user successfully", data: userData });
  } catch (err) {
    res.status(500).send({ Status: false, message: err.message });
  }
};

const getallusers = async (req, res) => {
  try {
    const users = await userModel.find({ isDeleted: false }).select({
      name: 1,
      rollno: 1,
      createdAt: 1,
      updatedAt: 1,
    });
    res.status(200).send({
      status: true,
      message: `users details`,
      data: users,
    });
  } catch (err) {
    res.status(500).send({ Status: false, message: err.message });
  }
};

module.exports = { addUser, getallusers };
