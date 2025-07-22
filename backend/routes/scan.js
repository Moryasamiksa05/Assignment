const express = require("express");
const router = express.Router();
const Scan = require("../models/Scan");

// Log a new scan
router.post("/scan", async (req, res) => {
  try {
    const { timeSpent } = req.body;
    const userIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const newScan = new Scan({ timeSpent, userIP });
    await newScan.save();
    res.status(201).json({ message: "Scan logged" });
  } catch (err) {
    res.status(500).json({ error: "Failed to log scan" });
  }
});

// Get analytics
router.get("/analytics", async (req, res) => {
  try {
    const scans = await Scan.find();
    const uniqueUsers = new Set(scans.map((s) => s.userIP)).size;
    const totalScans = scans.length;
    const avgTime =
      totalScans > 0
        ? Math.round(scans.reduce((acc, s) => acc + s.timeSpent, 0) / totalScans)
        : 0;

    res.json({
      totalScans,
      uniqueUsers,
      avgTimeSpent: `${avgTime} seconds`,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
});

module.exports = router;
