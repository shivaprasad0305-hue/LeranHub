const express = require("express");

const app = express();

app.get("/", (req, res) => {

  res.send("Welcome to LearnHub -version A!");


});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
app.get("/courses", (req, res) => {
    res.status(200).json({
        courses: [
            {
                id: 1,
                name: "DevOps Fundamentals"
            },
            {
                id: 2,
                name: "Node.js Basics"
            }
        ]
    });
});
//learnhub git practice 