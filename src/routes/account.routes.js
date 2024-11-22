import { ROUTER } from "../utils/constants.js";
import { accountControllerAccountId } from "../controllers/account.controller.js";

const account = ROUTER;

account.get("/", accountControllerAccountId);

export { account };
