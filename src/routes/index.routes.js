import { helloWorld } from "./helloWorld.js";
import { user } from "./user.routes.js";
import { ROUTER } from "../utils/router.constants.js";

const routes = ROUTER;

routes.use("/helloWorld", helloWorld);
routes.use("/user", user);

export default routes;
