import { ROUTER } from "../utils/router.constants.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { user } from "./user.routes.js";
import { account } from "./account.routes.js";
import { bankAccount } from "./bankAccount.routes.js";

const routes = ROUTER;

routes.use("/user", user);
routes.use("/account", authMiddleware, account);
routes.use("/bank", authMiddleware, bankAccount);

export default routes;
