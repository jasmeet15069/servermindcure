const express = require("express");
const router = express.Router();
const { mongoose } = require("mongoose");
const { User } = require("../models/User");

// router.get("/get-user-by-id", async (req, res) => {
//   const id = req.query["id"];
//   const objectId = new mongoose.Types.ObjectId(id);
//   const user = await User.find({ _id: objectId });
//   res.status(200).json(user);
// });

router.get("/get-user-by-id", async (req, res) => {
  const id = req.query["id"];
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Invalid ObjectId" });
    return;
  }
  const user = await User.findById(id);
  res.status(200).json(user);
});

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

router.get("/get-user-by-email", async (req, res) => {
  const email = req.query["email"];
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "Invalid email address" });
    return;
  }
  const user = await User.findOne({ email });
  res.status(200).json(user);
});

// router.get("/get-user-by-email", async (req, res) => {
//   const email = req.query["email"];
//   const user = await User.findOne({ email });
//   res.status(200).json(user);
// });

router.post("/register", async (req, res) => {
  // Check if user already exists
  const doesExist = await User.exists({ email: req.body.email });
  if (doesExist) {
    res.sendStatus(200);
  } else {
    const newUser = new User({ name: req.body.name, email: req.body.email });
    await newUser.save();
    res.sendStatus(200);
  }
});

module.exports = router;
