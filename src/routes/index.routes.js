import { user } from "./user.routes.js";
import { account } from "./account.routes.js";
import { ROUTER } from "../utils/router.constants.js";

const routes = ROUTER;

routes.use("/user", user);
routes.use("/account", account);

export default routes;
