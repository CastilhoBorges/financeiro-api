import { ROUTER } from "../utils/constants.js";
import { cardControllerCreate } from "../controllers/card.controller.js";

const card = ROUTER;

card.use("/:accountId/newCard/:bankAccountId", cardControllerCreate);

export { card };
