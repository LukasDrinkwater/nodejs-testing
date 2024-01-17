import express from "express";
import database from "./database.js";

export default function (database) {
  const app = express();

  app.use(express.json());
  app.post("/users", async (req, res) => {
    // res.status(200).send({ userId: 0 });
    const { password, username } = req.body;
    if (!password || !username) {
      res.sendStatus(400);
      return;
    }
    res.send({ userId: 0 });
  });

  return app;
}
