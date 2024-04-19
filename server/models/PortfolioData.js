const mongoose = require("mongoose");
const { commentSchema } = require("./Comment");
const { User, userSchema } = require("./User"); // assuming you have a User schema in a separate file

const postSchema = new mongoose.Schema({
  user: {
    ref:User,
    type: userSchema,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["In a relationship", "Single"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bioDescryption: {
    type: String,
    required: true,
  },
  goals: {
    type: String,
    required: true,
  },
  painPoints: {
    type: String,
    required: true,
  },
  interests: {
    type: [String],
    required: true,
  },
  currentFeelings: {
    type: [String],
    required: true,
  },
});

const PortfolioData = mongoose.model("PortfolioData", postSchema);

module.exports = PortfolioData;