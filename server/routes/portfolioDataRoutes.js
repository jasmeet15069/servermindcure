const express = require("express");
const router = express.Router();
const PortfolioData = require("../models/PortfolioData");

// Handle form submission
router.post("/newportfolio", async (req, res) => {
  const {
    userName,
    natureKeywords,
    bio,
    goalsInterests,
    painPointsConcerns,
    interests,
    currentFeelings,
  } = req.body;

  const newPortfolioData = new PortfolioData({
    userName,
    natureKeywords,
    bio,
    goalsInterests,
    painPointsConcerns,
    interests,
    currentFeelings,
  });

  try {
    const savedPortfolioData = await newPortfolioData.save();
    res.status(201).json(savedPortfolioData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;