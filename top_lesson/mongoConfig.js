//// mongoConfig.js
const mongoose = require("mongoose");

const mongoDb = `YOUR MONGO URL`;

mongoose.connect(mongoDb, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
