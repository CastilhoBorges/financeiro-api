import { ROUTER } from "../utils/constants.js";
import { userControllerCreate } from "../controllers/user.controller.js";
import { userControllerLogin } from "../controllers/user.controller.js";

const user = ROUTER;

user.post("/register", userControllerCreate);
user.post("/login", userControllerLogin);

export { user };
