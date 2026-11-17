const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to LearnHub Backend!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

module.exports = app;