import { Router } from "express";
import { helloWorld } from "./helloWorld.js";
import { registerUser } from "./registerUser.js";

const routes = Router();

routes.use("/helloWorld", helloWorld);
routes.use("/register", registerUser);

export default routes;
