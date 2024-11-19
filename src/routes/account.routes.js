import { ROUTER } from "../utils/router.constants.js";
import { accounts } from "../controllers/account.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const account = ROUTER;

account.get("/", authMiddleware, accounts);

export { account };
