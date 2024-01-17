// index is the module we are testing.
// index is the router
const index = require("./index");

const request = require("supertest");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Import the function to initialize the testing MongoDB server
const initializeMongoServer = require("./mongoConfigTesting");

// Call the function to initialize the testing MongoDB server before tests
beforeAll(async () => {
  await initializeMongoServer();
});

afterAll(async () => {
  // Disconnect Mongoose after all tests are done
  await mongoose.disconnect();
});

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

test("index route works", (done) => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ name: "frodo" })
    .expect(200, done);
});

test("testing route works", (done) => {
  request(app)
    .post("/test")
    .type("form")
    .send({ item: "hey" })
    .then(() => {
      request(app)
        .get("/test")
        .expect({ array: ["hey"] }, done);
    });
});

test("should respond with a status code of 400", async () => {
  const bodyData = [
    { username: "username", password: "password" },
    { username: "username" },
    { password: "password" },
    {},
  ];

  for (const body of bodyData) {
    const response = await request(app).post("/users").send(body);
    expect(response.statusCode).toBe(400);
  }
});
