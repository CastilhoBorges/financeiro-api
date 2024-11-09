import { Router } from "express";

const helloWorld = Router();

helloWorld.get("/", (req, res) => {
  res.send("Hello, world!");
});

export { helloWorld };
