import { ROUTER } from "../utils/constants.js";
import { bankControllerCreate } from "../controllers/bank.controller.js";

const bankAccount = ROUTER;

bankAccount.post("/create/:accountId", bankControllerCreate);

export { bankAccount };
