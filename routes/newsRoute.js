const express = require("express");
const router = express.Router();
const News = require("../models/News");

// Get paginated news (infinite scroll)
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 3 } = req.query;
    const news = await News.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get news by tag
router.get("/tag/:tag", async (req, res) => {
  try {
    const news = await News.find({ tags: req.params.tag }).sort({
      createdAt: -1,
    });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get single news item and update views
router.get("/:id", async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create news (Admin only)
router.post("/", async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete news
router.delete("/:id", async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Like/Dislike
router.patch("/:id/like", async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.patch("/:id/dislike", async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      { $inc: { dislikes: 1 } },
      { new: true }
    );
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
