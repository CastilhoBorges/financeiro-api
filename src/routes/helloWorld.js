import { ROUTER } from "../utils/router.constants.js";

const helloWorld = ROUTER;

helloWorld.get("/", (req, res) => {
  res.send("Hello, world!");
});

export { helloWorld };
