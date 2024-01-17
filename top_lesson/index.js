//// index.js
const express = require("express");
const index = express.Router();

const array = [];

index.get("/", (req, res) => {
  res.json({ name: "frodo" });
});

index.get("/test", (req, res) => res.json({ array }));

index.post("/test", (req, res) => {
  array.push(req.body.item);
  res.send("success!");
});

// index.post("/users", (req, res) => {
//   // get username and password from the body
//   const { username, password } = req.body;
//   // if either are false return 400 status
//   if (!password) {
//     res.sendStatus(400);
//     return;
//   }
//   res.send({ userId: 0 });
// });

index.post("/users", (req, res) => {
  // get username and password from the body
  const { username, password } = req.body;

  console.log(
    "Received request with username:",
    username,
    "and password:",
    password
  );

  // if either are false return 400 status
  if (!password || !username) {
    console.log("Sending 400 status");
    res.sendStatus(400);
    return;
  }

  console.log("Sending 200 status with userId: 0");
  res.send({ userId: 0 });
});
module.exports = index;
