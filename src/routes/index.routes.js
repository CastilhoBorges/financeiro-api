import { ROUTER } from "../utils/constants.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { user } from "./user.routes.js";
import { account } from "./account.routes.js";
import { bankAccount } from "./bankAccount.routes.js";
import { card } from "./card.routes.js";

const routes = ROUTER;

routes.use("/user", user);
routes.use("/account", authMiddleware, account);
routes.use("/bank", authMiddleware, bankAccount);
routes.use("/card", authMiddleware, card);

export default routes;
