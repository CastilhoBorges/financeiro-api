import { ROUTER } from "../utils/router.constants.js";
import { bankControllerCreate } from "../controllers/bank.controller.js";

const bankAccount = ROUTER;

bankAccount.post("/create", bankControllerCreate);

export { bankAccount };