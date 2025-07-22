const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  userIP: String,
  timeSpent: Number,
  scannedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Scan", scanSchema);
