import { Router } from "express";
import { helloWorld } from "./helloWorld.js";

const routes = Router();

routes.use("/helloWorld", helloWorld);

export default routes;
