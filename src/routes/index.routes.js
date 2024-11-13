import { Router } from "express";
import { helloWorld } from "./helloWorld.js";
import { user } from "./user.routes.js";

const routes = Router();

routes.use("/helloWorld", helloWorld);
routes.use("/user", user);

export default routes;
