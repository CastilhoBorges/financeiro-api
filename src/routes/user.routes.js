import { ROUTER } from "../utils/router.constants.js";
import { createUserController } from "../controllers/user.controller.js";

const createUser = ROUTER;

createUser.post("/", createUserController);

export { createUser };
