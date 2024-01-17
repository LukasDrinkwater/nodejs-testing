//// app.js
require("./mongoConfig");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

// its using a router for the routes
const indexRouter = require("./index");
app.use("/", indexRouter);

app.listen(3000, () => console.log("running"));
