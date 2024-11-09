import { Router } from "express";
import { helloWorld } from "./helloWorld.js";
import { createUser } from "./user.routes.js";

const routes = Router();

routes.use("/helloWorld", helloWorld);
routes.use("/register", createUser);

export default routes;
