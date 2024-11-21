import { ROUTER } from "../utils/router.constants.js";
import { accountControllerData } from "../controllers/account.controller.js";

const account = ROUTER;

account.get("/", accountControllerData);

export { account };
